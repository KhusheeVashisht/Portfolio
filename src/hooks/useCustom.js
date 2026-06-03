// Custom hooks for scroll animations, theme, and GitHub portfolio data
import { useState, useEffect } from 'react';
import {
  buildEmptyPortfolioModel,
  fetchPortfolioData,
  loadCachedPortfolio,
  saveCachedPortfolio,
} from '../utils/githubPortfolio';

export const useScrollAnimation = (elementRef, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!elementRef?.current || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      ...options,
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return isVisible;
};

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark')
        || localStorage.getItem('darkMode') === 'true';
    }
    return true;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDark]);

  const toggle = () => setIsDark(!isDark);
  return { isDark, toggle };
};

export const useGitHubRepos = (username) => {
  const [portfolio, setPortfolio] = useState(() => loadCachedPortfolio()?.data || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingCache, setUsingCache] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const fetchRepos = async () => {
      const cached = loadCachedPortfolio();

      if (cached?.data && !cancelled) {
        setPortfolio(cached.data);
        setUsingCache(!cached.isFresh);
      }

      try {
        const model = await fetchPortfolioData(username);

        if (!cancelled) {
          setPortfolio(model);
          setError(null);
          setUsingCache(false);
          saveCachedPortfolio(model);
        }
      } catch (err) {
        if (!cancelled) {
          if (cached?.data) {
            setPortfolio(cached.data);
            setUsingCache(true);
            setError(err.code === 'RATE_LIMIT'
              ? 'GitHub rate limit reached. Showing cached repository data.'
              : 'Live GitHub data unavailable. Showing cached repository data.');
          } else {
            setPortfolio(buildEmptyPortfolioModel());
            setError(err.message || 'Failed to fetch GitHub profile data');
          }
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    if (username) {
      fetchRepos();
    } else {
      setPortfolio(buildEmptyPortfolioModel());
      setLoading(false);
    }

    return () => {
      cancelled = true;
    };
  }, [username]);

  return { portfolio, loading, error, usingCache };
};

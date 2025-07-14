import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 100,
    });
  }, []);

  return null;
}

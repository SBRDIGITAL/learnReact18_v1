import { useState, useEffect } from 'react';

export default function HeaderElement() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
        const now = new Date();
        setCurrentTime(now.toLocaleTimeString());
    };

    // Обновляем время сразу при монтировании компонента
    updateTime();
    // Устанавливаем интервал для обновления времени каждую секунду
    const intervalId = setInterval(updateTime, 100);
    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  })
  return (
    <>
      <header>
        <h1>Это Header</h1>
        <h3>Текущее время {currentTime}</h3>
    </header>
    </>
  )
}
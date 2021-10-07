 onmessage = (e) => {
    const { milliseconds } = e.data;
    const start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds) {}
  };
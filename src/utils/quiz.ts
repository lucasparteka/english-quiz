export function updateWithInterval(func: () => void) {
  let counter = 10;

  let interval = setInterval(() => {
    func();
    counter--;

    if (counter === 0) clearInterval(interval);
  }, 80);
}

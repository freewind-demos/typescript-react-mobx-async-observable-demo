async function wait(seconds: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => resolve(), seconds * 1000);
  })
}

export default async function fetchFromRemote(): Promise<number> {
  await wait(1);
  return Math.floor(Math.random() * 10);
};

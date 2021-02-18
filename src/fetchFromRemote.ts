async function wait(seconds: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => resolve(), seconds * 1000);
  })
}

export default async function fetchFromRemote(): Promise<number> {
  await wait(1);
  const result = Math.floor(Math.random() * 100)
  if (result % 2 === 0) {
    return result;
  } else {
    throw new Error(`error: ${result}`)
  }
};

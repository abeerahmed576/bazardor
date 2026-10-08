export type TGetData = <T>(url: string, config?: RequestInit) => Promise<T>;

const getData: TGetData = async <T>(
  url: string,
  config?: RequestInit,
): Promise<T> => {
  const res = await fetch(url, config);

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
};

export default getData;

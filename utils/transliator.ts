

export const transliator = (
  obj: any,
  currentLng: any,
  prefix: string
): any => {
  if (obj?.id) {
    const translatedContent = Object?.entries(obj)?.filter((el) =>
      el[0]?.includes(`${prefix}_${currentLng}`)
    )[0]?.[1];
    if (!translatedContent && obj?.id) {
      return Object?.entries(obj)?.filter((el) =>
        el?.[0]?.includes(`${prefix}_hy`)
      )[0]?.[1];
    }
    return translatedContent;
  }
};
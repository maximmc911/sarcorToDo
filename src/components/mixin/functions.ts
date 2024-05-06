// Ф-ция для сокращения текста до 22 символов

export const UpdateText = (e: string, num: number): string => {
  let correctText: string = e;
  if (e.length > num) {
    correctText = e.substring(0, num) + " ...";
  }
  return correctText;
};

// Ф-ция для генерации уникального id
export const GeneratorID = (): number => {
  const date = new Date();
  return date.getTime();
};

// Ф-ция для получения процента выполненных задач
export const ReceivingInterest = (arr: Array<items>): number => {
  let count = 0;
  arr.forEach((el: { status: boolean }) => {
    if (el.status) count += 1;
  });
  if (arr.length !== 0) {
    count = (count / arr.length) * 100;
  }
  return Number(count.toFixed(2));
};

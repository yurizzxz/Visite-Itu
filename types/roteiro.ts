export type Roteiro = {
  title: string;
  duration: string;
  description?: string;
  targetAudience: string;
  steps: {
    title: string;
    description: string;
  }[];
};

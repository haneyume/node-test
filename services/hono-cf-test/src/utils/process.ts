interface Process {
  env: {
    UNSPLASH_ACCESS_KEY: string;
    UNSPLASH_SECRET_KEY: string;
    GIPHY_API_KEY: string;
  };
}

export const process: Process = {
  env: {
    UNSPLASH_ACCESS_KEY: '',
    UNSPLASH_SECRET_KEY: '',
    GIPHY_API_KEY: '',
  },
};

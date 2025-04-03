const env = import.meta.env; // Vite 环境变量

export const API_BASE_URL = env.VITE_API_URL || '/api'; // 从 .env 文件读取
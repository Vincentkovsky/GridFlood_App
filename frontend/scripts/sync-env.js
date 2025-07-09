import axios from 'axios';

async function syncEnv() {
    try {
        console.log('正在同步环境变量...');
        const response = await axios.post('http://localhost:3000/api/sync-env');
        console.log('环境变量同步成功:', response.data);
    } catch (error) {
        console.error('环境变量同步失败:', error);
        process.exit(1);
    }
}

syncEnv(); 
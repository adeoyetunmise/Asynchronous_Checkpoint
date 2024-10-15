// Task 1
const iteration = async (values) => {
    for (let value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        console.log(value);
    }
};
iteration([1, 2, 3, 4]);

// Task 2 
const simulateAPICall = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.2; 
        setTimeout(() => {
            if (success) {
                resolve({ data: 'Fetched Data' });
            } else {
                reject('API call failed');
            }
        }, 1000);
    });
};

// Task 3
const awaitCall = async () => {
    try {
        const response = await simulateAPICall();
        console.log('API Response:', response.data);
    } catch (error) {
        console.error('Error occurred:', error);
    }
};

awaitCall();

// Chaining Async/Await

const firstFunction = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('First function completed');
};

const secondFunction = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Second function completed');
};

const thirdFunction = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Third function completed');
};

const chainedAsyncFunctions = async () => {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
};


chainedAsyncFunctions();

// Task 4

const simulateConcurrentRequest = (name, delay) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(`${name} data`), delay);
    });
};

const concurrentRequests = async () => {
    const request1 = simulateConcurrentRequest('Request 1', 1000);
    const request2 = simulateConcurrentRequest('Request 2', 1500);

    const results = await Promise.all([request1, request2]);
    console.log('Combined Results:', results);
};


concurrentRequests();

// Task 5
const fetchData = async (url) => {
    // Simulate fetching data from the URL with a delay
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, 1000); // Simulated 1-second delay
    });
};

const parallelCalls = async (urls) => {
    try {
        // Fetch data from all URLs concurrently using Promise.all()
        const results = await Promise.all(urls.map(url => fetchData(url)));
        console.log('All responses:', results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const urls = ['https://api.example.com/data1', 'https://api.example.com/data2', 'https://api.example.com/data3'];
parallelCalls(urls);





// Now we trying to fetch the users details from the website using fetch method
// Promise { <pending> } means need time to execute so use 'await'

// fetch, data handling via .then , .catch , .finally
fetch('https://randomuser.me/api/')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data.results[0].name);
})
.catch((error) => {
    console.log("E: ",error);
})
.finally(() => {
    console.log('I am completed my Job');
});

// async, await, try, catch
async function asyncAwaitFetch() {
    try {
        // fetch an API and store data in variable, All this take someTime
        const fetchAPI = await fetch('https://randomuser.me/api/');

        // fetchAPI dataType is object, need to convert into json()
        const data = await fetchAPI.json();

        // Print the data
        console.log(data.results[0].gender);
    } catch (error) {
        console.log("Error : ", error);
    }
}

  const  request = method => (url, options = {}) => {
    const { accessToken } = JSON.parse(localStorage.getItem('usersession') || '{}');
    return fetch(url, {
      method,
      body: JSON.stringify(options.data || {}),
      cors: "cors",
      headers: {
        "Content-Type": "application/json",
        ...(accessToken ? { 'Authorization': `Bearer ${accessToken}` } : {}),
        ...(options.headers || {})
      },
      ...options
    }); 
}


 export const[post, get, put, deletee] = ["POST", "GET", "PUT", "DELETE"].map(request);

  
export {request as default}

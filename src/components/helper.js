
   
    
   const  request = method => (url, options = {}) =>
  fetch(url, {
    method,
    body: JSON.stringify(options.data || {}),
    cors: "cors",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  }); 
  

   export const[post, get, put, deletee] = ["POST", "GET", "PUT", "DELETE"].map(request);
  
    
export {request as default}

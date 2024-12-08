const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }
  return response.json();
};

export const getRequest = async (endpoint) => {
  const response = await fetch(`${backendUrl}${endpoint}`);
  return handleResponse(response);
};

export const postRequest = async (endpoint, data) => {
  console.log("the backend url is ", backendUrl);
  const response = await fetch(`${backendUrl}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

export const deleteRequest = async (endpoint) => {
  const response = await fetch(`${backendUrl}${endpoint}`, {
    method: "DELETE",
  });
  return handleResponse(response);
};

export const putRequest = async (endpoint, data) => {
  const response = await fetch(`${backendUrl}${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

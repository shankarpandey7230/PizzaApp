const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

const getMenu = async () => {
  const res = await fetch(`${API_URL}/menu`);

  // it won't throw error on 400 errors (e.g  when URL is wrong ) so we need to do it manually. this will then go in to the catch block where the message is set

  if (!res.ok) throw Error('Failed getting menu');
  const { data } = await res.json();
  return data;
};

export const getOrder = async (id) => {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Could not find order #${id}`);

  const { data } = await res.json();
  return data;
};

export const createOrder = async (newOrder) => {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) throw Error();
    const { data } = await res.json();
  } catch {
    throw Error('Failed creating your order');
  }
};

export const updateOrder = async (id) => {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) throw Error();
  } catch (error) {
    throw Error('Failed updating your order');
  }
};

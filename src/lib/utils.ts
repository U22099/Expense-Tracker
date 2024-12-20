import mongoose from 'mongoose';
import axios from "axios";
import { type datatype, type datatype3 } from "@/store";
import { getCurrentDate } from "@/store";

const connection: {
    [index: string]: unknown
} = {};

export const connectToDb = async () => {
    try{
        if(connection.isConnected){
            console.log("Using existing connection")
            return;
        }
        const db = await mongoose.connect(process.env.DATABASE_URL as string);
        connection.isConnected = db.connections[0].readyState;
    } catch(err) {
        console.log("Error at connectToDb " , err)
        return false;
    }
}

export async function fetchUser(setUser: any){
    try{
      const response = await axios.get('api/user');
      const data = response.data;
      if(response.status === 200) setUser(data.user);
    } catch(err){
      console.log("Error at fetchUser " , err)
      return false;
    }
}

export async function fetchData(setData: any) {
  try {
    const response = await axios.get('api/data');
    if(!response.data) return false;
    const data = response.data as {
      data: datatype
    };
    console.log("data ",data)
    if (response.status === 200 && data.data.length> 0) setData(data.data);
  } catch(err) {
    console.log("Error at fetchData " , err)
    return false;
  }
}

export async function fetchExpenseData(setExpense: any, setData: any) {
  try {
    const response = await axios.get('api/expense');
    if (!response.data) return false;
    const data = response.data as {
      data: datatype3
    };
    console.log("expense ",data);
    if (response.status === 200){
      const expense = data.data;
      const date = getCurrentDate();
      const todaysExpense = expense.find(entry => entry.date === date);
      if (!todaysExpense || !todaysExpense?.amount) {
        setData(template);
      }
      setExpense(expense);
      return true;
    }
  } catch(err) {
    console.log("Error at fetchExpenseData " , err)
    return false;
  }
}

export async function fetchCurrency(setCurrencySymbol: any) {
  try {
    const response = await axios.get('api/currency');
    const { data } = response.data;
    console.log("currency ",data);
    if (response.status === 200) setCurrencySymbol(data || "$");
  } catch (err) {
    console.log("Error at fetchCurrency ", err)
    return false;
  }
}

export async function updateData(data: datatype | []) {
  try {
    console.log("Updating Data ", data)
    const response = await axios.post('api/data', { data });
    if (response.status === 200) return true;
  } catch(err) {
    console.log("Error at updateData " , err)
    return false;
  }
}

export async function updateUser(data: any) {
  try {
    const response = await axios.post('api/user', { data });
    if (response.status === 200) return true;
  } catch(err) {
    console.log("Error at updateUser " , err)
    return false;
  }
}

export async function updateExpenseData(data: datatype3 | []) {
  try {
    console.log("Updating Expense ", data)
    const response = await axios.post('api/expense', { data });
    if (response.status === 200) return true;
  } catch(err) {
    console.log("Error at updateExpenseData " , err)
    return false;
  }
}

export async function updateCurrency(data: string) {
  try {
    const response = await axios.post('api/currency', { data });
    if (response.status === 200) return true;
  } catch(err) {
    console.log("Error at updateCurrency " , err)
    return false;
  }
}

export async function deleteUser(): Promise <boolean | undefined | null> {
  try {
    const response = await axios.post('api/user/delete', { });
    if (response.status === 200) return true;
  } catch (err) {
    console.log("Error at deleteUser ", err)
    return false;
  }
}

export async function reset(setData: any, setExpense: any): Promise <boolean | undefined | null> {
  try {
    await updateData([]);
    await updateExpenseData([]);
    setData(template);
    setExpense([]);
  } catch (err) {
    console.log("Error at reset ", err)
    return false;
  }
}

const template: datatype = [
  {
    category: 'Housing',
    amount: 0
  },
  {
    category: 'Transportation',
    amount: 0
  },
  {
    category: 'Food',
    amount: 0
  },
  {
    category: 'Entertainment',
    amount: 0
  },
  {
    category: 'Personal',
    amount: 0
  },
  {
    category: 'Health',
    amount: 0
  },
  {
    category: 'Debt',
    amount: 0
  },
  {
    category: 'Others',
    amount: 0
  }
];



//Developer Utils
export async function resetDatabase(): Promise<boolean | undefined | null>{
  try {
    const response = await axios.post('api/dev/reset-db', { });
    if (response.status === 200) return true;
  } catch (err) {
    console.log("Error at resetDatabase ", err)
    return false;
  }
}
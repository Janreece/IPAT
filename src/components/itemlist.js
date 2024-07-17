import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Itemlist.css'
const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    } , []);
    const fetchItems = async () => {
    try {
        const response = await
        axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
    } catch (error) {
    console.error('There was an error fetching the items!', error);
}
};
    return (
        <div>
        <h1>Items</h1>
        <ul>
            {items.map(item => (
            <li key={item.id}>
            {item.firstname} : {item.middlename} : {item.lastname} : {item.Address} : {item.Barangay} : {item.City} : {item.Postal_code} : {item.Region} : 
            {item.Religion} : {item.Gender}: {item.Age} : {item.Phone} : {item.Email}: {item.Student_No} : {item.Height} : {item.Weight}: {item.Place_of_Birth} :
            {item.Occupation} : {item.Course}: {item.Date_of_Birth} : {item.Section} : {item.College}: {item.Subject} : {item.Nationality} : {item.School} :
            {item.TIN_ID} : {item.SSN} : {item.Secondary_school_name} : {item.Phil_Health_Number}

        <button onClick={() => onEdit(item)}>Edit</button>
        <button onClick={() => onDelete(item.id)}>Delete</button>
            </li>
            ))}
        </ul>
    </div>
    );
};
export default ItemList;
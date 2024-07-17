import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ItemForms.css'
const ItemForm = ({ item, onSuccess }) => {
    const [firstname, setfirstname] = useState('');
    const [middlename, setmiddlename] = useState('');
    const [lastname, setlastname] = useState('');
    const [Address, setAddress] = useState('');
    const [Barangay, setBarangay] = useState('');
    const [City, setCity] = useState('');
    const [Postal_code, setPostal_code] = useState('');
    const [Region, setRegion] = useState('');
    const [Religion, setReligion] = useState('');
    const [Gender, setGender] = useState('');
    const [Age, setAge] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [Student_No, setStudent_No] = useState('');
    const [Height, setHeight] = useState('');
    const [Weight, setWeight] = useState('');
    const [Place_of_Birth, setPlace_of_Birth] = useState('');
    const [Occupation, setOccupation] = useState('');
    const [Course, setCourse] = useState('');
    const [Date_of_birth, setDate_of_birth] = useState('');
    const [Section, setSection] = useState('');
    const [College, setCollege] = useState('');
    const [Subject, setSubject] = useState('');
    const [Nationality, setNationality] = useState('');
    const [School, setSchool] = useState('');
    const [TIN_ID, setTIN_ID] = useState('');
    const [SSN, setSSN] = useState('');
    const [Secondary_school_name, setsecondary_school_name] = useState('');
    const [Phil_Health_Number, setPhil_Health_Number] = useState('');
    useEffect(() => {
        if (item) {
        setfirstname(item.firstname);
        setmiddlename(item.middlename);
        setlastname(item.lastname);
        setAddress(item.Address);
        setBarangay(item.Barangay);
        setCity(item.City);
        setPostal_code(item.Postal_code);
        setRegion(item.Region);
        setReligion(item.Religion);
        setGender(item.Gender);
        setAge(item.Age);
        setPhone(item.Phone);
        setEmail(item.Email);
        setStudent_No(item.Student_No);
        setHeight(item.Height);
        setWeight(item.Weight);
        setPlace_of_Birth(item.Place_of_Birth);
        setOccupation(item.Occupation);
        setCourse(item.Course);
        setDate_of_birth(item.Date_of_birth);
        setSection(item.Section);
        setCollege(item.College);
        setSubject(item.Subject);
        setNationality(item.Nationality);
        setSchool(item.School);
        setTIN_ID(item.TIN_ID);
        setSSN(item.SSN);
        setsecondary_school_name(item.Secondary_school_name);
        setPhil_Health_Number(item.Phil_Health_Number);
    }
    }, [item]);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { firstname, middlename, lastname, Address,Barangay,City,Postal_code, 
            Region, Religion, Gender, Age, Phone, Email,Student_No, Height, Weight, Place_of_Birth, Occupation,
        Course, Date_of_birth, Section, College, Subject, Nationality, School, TIN_ID, SSN, Secondary_school_name, Phil_Health_Number};
        try {
            if (item) {
                await
        axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
        } else {
                await
        axios.post('http://localhost:8000/api/items/', data);
        }
        onSuccess();
    } catch (error) {
console.error('There was an error submitting the form!', error);
    }
};

    return (
    <form onSubmit={handleSubmit}>
    <div>
        <label>Firstname:</label>
            <input type="text" value={firstname} onChange={(e) => setfirstname(e.target.value)} />
    </div>
    <div>
        <label>Middlename:</label>
            <input type="text" value={middlename} onChange={(e) => setmiddlename(e.target.value)} />
    </div>
    <div>
        <label>Lastname:</label>
            <input type="text" value={lastname} onChange={(e) => setlastname(e.target.value)} />
    </div>

    <div>
        <label>Address:</label>
            <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} />
    </div>
    <div>
        <label>Barangay:</label>
            <input type="text" value={Barangay} onChange={(e) => setBarangay(e.target.value)} />
    </div>
    <div>
        <label>City:</label>
            <input type="text" value={City} onChange={(e) => setCity(e.target.value)} />
    </div>
    <div>
        <label>Postal code:</label>
            <input type="text" value={Postal_code} onChange={(e) => setPostal_code(e.target.value)} />
    </div>

    <div>
        <label>Region:</label>
            <input type="text" value={Region} onChange={(e) => setRegion(e.target.value)} />
    </div>
    <div>
        <label>Religion:</label>
            <input type="text" value={Religion} onChange={(e) => setReligion(e.target.value)} />
    </div>
    <div>
        <label>Gender:</label>
            <input type="text" value={Gender} onChange={(e) => setGender(e.target.value)} />
    </div>

    <div>
        <label>Age:</label>
            <input type="text" value={Age} onChange={(e) => setAge(e.target.value)} />
    </div>
    <div>
        <label>Phone:</label>
            <input type="text" value={Phone} onChange={(e) => setPhone(e.target.value)} />
    </div>
    <div>
        <label>Email:</label>
            <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} />
    </div>

    <div>
        <label>Student No:</label>
            <input type="text" value={Student_No} onChange={(e) => setStudent_No(e.target.value)} />
    </div>
    <div>
        <label>Height:</label>
            <input type="text" value={Height} onChange={(e) => setHeight(e.target.value)} />
    </div>
    <div>
        <label>Weight:</label>
            <input type="text" value={Weight} onChange={(e) => setWeight(e.target.value)} />
    </div>
    <div>
        <label>Place of Birth:</label>
            <input type="text" value={Place_of_Birth} onChange={(e) => setPlace_of_Birth(e.target.value)} />
    </div>
   
    <div>
        <label>Occupation:</label>
            <input type="text" value={Occupation} onChange={(e) => setOccupation(e.target.value)} />
    </div>

    <div>
        <label>Course:</label>
            <input type="text" value={Course} onChange={(e) => setCourse(e.target.value)} />
    </div>
    <div>
        <label>Date of birth:</label>
            <input type="text" value={Date_of_birth} onChange={(e) => setDate_of_birth(e.target.value)} />
    </div>
    <div>
        <label>Section:</label>
            <input type="text" value={Section} onChange={(e) => setSection(e.target.value)} />
    </div>
    <div>
        <label>College:</label>
            <input type="text" value={College} onChange={(e) => setCollege(e.target.value)} />
    </div>
    <div>
        <label>Subject:</label>
            <input type="text" value={Subject} onChange={(e) => setSubject(e.target.value)} />
    </div>

    <div>
        <label>Nationality:</label>
            <input type="text" value={Nationality} onChange={(e) => setNationality(e.target.value)} />
    </div>
    <div>
        <label>Name of School:</label>
            <input type="text" value={School} onChange={(e) => setSchool(e.target.value)} />
    </div>
    <div>
        <label>TIN_ID:</label>
            <input type="text" value={TIN_ID} onChange={(e) => setTIN_ID(e.target.value)} />
    </div>

    <div>
        <label>SSN:</label>
            <input type="text" value={SSN} onChange={(e) => setSSN(e.target.value)} />
    </div>
    <div>
        <label>Secondary school name:</label>
            <input type="text" value={Secondary_school_name} onChange={(e) => setsecondary_school_name(e.target.value)} />
    </div>
    <div>
        <label>Phil_Health_Number:</label>
            <input type="text" value={Phil_Health_Number} onChange={(e) => setPhil_Health_Number(e.target.value)} />
    </div>
        <button type="submit">Submit</button>
        </form>
    );
};
export default ItemForm;
   
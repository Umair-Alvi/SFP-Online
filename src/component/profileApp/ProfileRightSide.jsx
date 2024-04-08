import React from 'react'
import Header from '../header/Header'
import ProfileLeftSide from './ProfileLeftSide'
import Input from '../Input'
import {useForm} from "react-hook-form"
import Button from '../button/Button'
import Dropdown from '../dropdown/Dropdown'


const ProfileRightSide = () => {
    const {register, handleSubmit} = useForm()
  return (
    <>
      <div className="col-12 p-3 fs-5 text-center font-semibold">
      User Profile
      </div>
      <div className="col">
      <Input
                    label="Name"
                    Value="Muhammad Umair Akram"
                    disabled
                    className="mb-2 mt-1 bg-body-color-700"
                    {...register("Name", { required: true })}
                   
                />
      </div>
      <div className="col ">
      <Input
                    label="Email address"
                    Value="umairawan2239@gmail.com"
                    disabled
                    className="mb-2 mt-1 bg-body-color-700"
                    {...register("Email address", { required: true })}
                   
                />
      </div>

      <div className="col-12  font-bold">
      Update Password
      <hr className='mt-4'/> 
      </div>

      <form action="">
        <div className="col">
        <Input
                        label="Current Password"
                        className="mb-2 mt-1"
                        {...register("Current Password", { required: true })}
                    
                    />
        </div>
        <div className="col">
        <Input
                        label="New Password"
                        className="mb-2 mt-1 "
                        {...register("New Password", { required: true })}
                    
                    />
        </div>
        <div className="col">
        <Input
                        label="Confirm New Password"
                        className="mb-2 mt-1 "
                        {...register("Confirm New Password", { required: true })}
                    
                    />
        </div>

        <div className="d-grid gap-2  mb-2">
                            <Button className="btn btn-color  pl-20" type="button">
                             Update Password
                            </Button>
                        </div>
      </form>

        <label htmlFor="user-type"  className='inline-block mb-1 pl-1 form-label ' > User Type</label>

        
                <Dropdown
                    options={["Adviser"]}
                    disabled
                    className="mb-4 bg-body-color-700"
                />

        <div className="col-12 text-center font-bold fs-5">
             Muhammad Umair Akram Profile
        <hr className='mt-6'/>
         </div>

         <div className="row">
            <div className="col-3">
                <label htmlFor="user-type"  className='inline-block mb-1 pl-1 form-label ' > BAC</label>
                <Dropdown
                    options={["Select BAC"]}
                    disabled
                    className="mb-4 bg-body-color-700"
                />
            </div>
            <div className="col-3">
            <label htmlFor="user-type"  className='inline-block mb-1 pl-1 form-label ' > Region</label>
                <Dropdown
                    options={["Select Region"]}
                    disabled
                    className="mb-4 bg-body-color-700"
                />
            </div>
            <div className="col-3">
            <Input
                        label="Surname"
                        className="mb-2 mt-1"
                        {...register("Surname ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Initials"
                        className="mb-2 mt-1"
                        {...register("Initials", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Full Name"
                        alue="Muhammad Umair Akram"
                        className="mb-2 mt-1"
                        {...register("Full Name", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Nick Name"
                        className="mb-2 mt-1"
                        {...register("Nick Name", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="ID Number"
                        className="mb-2 mt-1"
                        {...register("ID Number", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Qualification Name"
                        className="mb-2 mt-1"
                        {...register("Qualification Name", { required: true })}
                    
                    />
            </div>

            <div className="col-3">
            <Input
                        label="Advisor Tag"
                        className="mb-2 mt-1"
                        {...register("Advisor Tag ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Contact Cell"
                        className="mb-2 mt-1"
                        {...register("Contact Cell", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="FSP option"
                        className="mb-2 mt-1"
                        {...register("FSP option", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Representative Status option"
                        className="mb-2 mt-1"
                        {...register("Representative Status option", { required: true })}
                    
                    />
            </div>

            <div className="col-3">
            <Input
                        label="Address Physical 1"
                        className="mb-2 mt-1"
                        {...register("Address Physical 1", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Address Physical 2"
                        className="mb-2 mt-1"
                        {...register("Address Physical 2", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Address Physical 3"
                        className="mb-2 mt-1"
                        {...register("Address Physical 3", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Address Physical Postal Code"
                        className="mb-2 mt-1"
                        {...register("Address Physical Postal Code", { required: true })}
                    
                    />
            </div>

            <div className="col-3">
            <Input
                        label="Address Postal 1"
                        className="mb-2 mt-1"
                        {...register("Address Postal 1", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Address Postal 2"
                        className="mb-2 mt-1"
                        {...register("Address Postal 2", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Address Postal 3"
                        className="mb-2 mt-1"
                        {...register("Address Postal 3", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Address Postal Postal Code"
                        className="mb-2 mt-1"
                        {...register("Current", { required: true })}
                    
                    />
            </div>

            <div className="col-3">
            <Input
                        label="Apply to All Categories"
                        className="mb-2 mt-1"
                        {...register("Current", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Appointment Date"
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Appointment Date", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 1 SUS Completion Date"
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 1 SUS Completion Date", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 10 SUS Completion Date"
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 10 SUS Completion Date", { required: true })}
                    
                    />
            </div>

            <div className="col-3">
            <Input
                        label="Category 1 11 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 11 SUS Completion Date ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 12 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 12 SUS Completion Date ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 13 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 13 SUS Completion Date ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 14 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 14 SUS Completion Date ", { required: true })}
                    
                    />
            </div>

            <div className="col-3">
            <Input
                        label="Category 1 15 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 15 SUS Completion Date ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 16 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 16 SUS Completion Date ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 17 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 17 SUS Completion Date ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 18 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 18 SUS Completion Date ", { required: true })}
                    
                    />
            </div>

            <div className="col-3">
            <Input
                        label="Category 1 19 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 19 SUS Completion Date ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 2 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 2 SUS Completion Date ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 20 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 20 SUS Completion Date ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 21 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 21 SUS Completion Date ", { required: true })}
                    
                    />
            </div>

            <div className="col-3">
            <Input
                        label="Category 1 22 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 22 SUS Completion Date ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 23 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 23 SUS Completion Date ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 24 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 24 SUS Completion Date ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 25 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 25 SUS Completion Date ", { required: true })}
                    
                    />
            </div>

            <div className="col-3">
            <Input
                        label="Category 1 26 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 26 SUS Completion Date ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 3 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 3 SUS Completion Date ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 4 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 4 SUS Completion Date ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 5 SUS Completion Date "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 5 SUS Completion Date ", { required: true })}
                    
                    />
            </div>

            <div className="col-3">
            <Input
                        label="Category 1 6 SUS Completion Date  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 6 SUS Completion Date  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 7 SUS Completion Date  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 7 SUS Completion Date  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 8 SUS Completion Date  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 8 SUS Completion Date  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category 1 9 SUS Completion Date  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category 1 9 SUS Completion Date  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category1 1 Accredited  "
                       
                        className="mb-2 mt-1"
                        {...register("Category1 1 Accredited  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category1 1 First Registration Date AdviceServices  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category1 1 First Registration Date AdviceServices  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category1 1 First Registration Date Intm Services  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category1 1 First Registration Date Intm Services  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category1 1 FSB Registration Date  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category1 1 FSB Registration Date  ", { required: true })}
                    
                    />
            </div>

            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>

            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                        type="date"
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="Category  "
                       
                        className="mb-2 mt-1"
                        {...register("Category  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="DEP URL  "
                       
                        className="mb-2 mt-1"
                        {...register("DEP URL  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="LI URL  "
                       
                        className="mb-2 mt-1"
                        {...register("LI URL  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="LinkedIn manage profile  "
                       
                        className="mb-2 mt-1"
                        {...register("LinkedIn manage profile  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="FB URL  "
                        
                        className="mb-2 mt-1"
                        {...register("FB URL  ", { required: true })}
                    
                    />
            </div>

            <div className="col-3">
            <Input
                        label="GROUP  "
                       
                        className="mb-2 mt-1"
                        {...register("GROUP  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="BI ACCESS  "
                       
                        className="mb-2 mt-1"
                        {...register("BI ACCESS  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="OTP Enabled  "
                        
                        className="mb-2 mt-1"
                        {...register("OTP Enabled  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="RE ROLL  "
                       
                        className="mb-2 mt-1"
                        {...register("RE ROLL  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="LMS ACCESS  "
                       
                        className="mb-2 mt-1"
                        {...register("LMS ACCESS  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="PROFILEME DBC LINK  "
                        
                        className="mb-2 mt-1"
                        {...register("PROFILEME DBC LINK  ", { required: true })}
                    
                    />
            </div>
            <div className="col-3">
            <Input
                        label="DDTC  "
                        
                        className="mb-2 mt-1"
                        {...register("DDTC  ", { required: true })}
                    
                    />
            </div>


           

         </div>


      
    </>
  )
}

export default ProfileRightSide

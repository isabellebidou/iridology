import React, { useEffect, useState } from 'react';
import fieldsArray from "./userData/formFields";
import store from "./store";
import { Link } from "react-router-dom";

function UserData() {
  useEffect(() => {
    if (store.getState()) {
    }

    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const userData = await fetch(`/api/user_data/`);
    const items = await userData.json();
    setItems(items);

  };



  return (
    <section>
      <fieldset>
        <legend><h2> Information </h2></legend>
        
          {items.length > 0 &&
            <Link to="/userdata/edit" className="">
              <button className="actionupload">edit data</button>
            </Link>
          }
        


        {items.length > 0 &&
          items.map(data => (

            <div className="col" key={'col777'}>
              <dl className="userdatadl" key={'userdatadl'+1}>

                <dt key={'dt'+1} htmlFor="fname">{(fieldsArray.find(f => f.name === 'fname')).label}</dt>
                <dd
                  name="fname"
                  key={"dd"+111}>
                  {data.fname ? data.fname : ""}

                </dd>
                <dt key={1} htmlFor="lname">{(fieldsArray.find(f => f.name === 'lname')).label}</dt>
                <dd
                  name="lname"
                  key={111}>
                  {data.lname ? data.lname : ""}

                </dd>
                <dt key={2} htmlFor="gender">{(fieldsArray.find(f => f.name === 'gender')).label}</dt>
                <dd
                  name="gender"
                  key={112}>
                  {data.gender ? data.gender : ""}

                </dd>
                <dt key={3+'dob'} htmlFor="dob">{(fieldsArray.find(f => f.name === 'dob')).label}</dt>
                <dd
                  name="dob"
                  key={"dob"+119}>
                  {data.dob ? new Date(data.dob).toLocaleDateString() : ""}

                </dd>
                <dt key={3} htmlFor="weight">{(fieldsArray.find(f => f.name === 'weight')).label}</dt>
                <dd
                  name="weight"
                  key={11118}>
                  {data.weight ? data.weight : ""}

                </dd>
                <dt key={4} htmlFor="height">{(fieldsArray.find(f => f.name === 'height')).label}</dt>
                <dd
                  name="height"
                  key={114}>
                  {data.height ? data.height : ""}

                </dd>
                <dt key={5} htmlFor="history">{(fieldsArray.find(f => f.name === 'history')).label}</dt>
                <dd
                  name="history"
                  key={115} >{data.history ? data.history : ""}

                </dd>
                <dt key={6} htmlFor="genetics">{(fieldsArray.find(f => f.name === 'genetics')).label}</dt>
                <dd
                  name="genetics"
                  key={116} >{data.genetics ? data.genetics : ""}

                </dd>
                <dt key={7} htmlFor="gluten">{(fieldsArray.find(f => f.name === 'gluten')).label}</dt>
                <dd
                  name="gluten"
                  key={117}>{data.gluten ? data.gluten : ""}

                </dd>
                <dt key={8} htmlFor="dairy">{(fieldsArray.find(f => f.name === 'dairy')).label}</dt>
                <dd
                  name="dairy"
                  key={118} >{data.dairy ? data.dairy : ""}

                </dd>
                <dt key={9} htmlFor="eatingHabits">{(fieldsArray.find(f => f.name === 'eatingHabits')).label}</dt>
                <dd
                  name="eatingHabits"
                  key={119}>{data.eatingHabits ? data.eatingHabits : ""}

                </dd>
                <dt key={10} htmlFor="dentalHistory">{(fieldsArray.find(f => f.name === 'dentalHistory')).label}</dt>
                <dd
                  name="dentalHistory"
                  key={120} >{data.dentalHistory ? data.dentalHistory : ""}

                </dd>
                <dt key={11} htmlFor="bloodType">{(fieldsArray.find(f => f.name === 'bloodType')).label}</dt>
                <dd
                  name="bloodType"
                  key={121}>{data.bloodType ? data.bloodType : ""}

                </dd>
                <dt key={12} htmlFor="digestion">{(fieldsArray.find(f => f.name === 'digestion')).label}</dt>
                <dd
                  name="digestion"
                  key={122} >{data.digestion ? data.digestion : ""}

                </dd>
                <dt key={13} htmlFor="medication">{(fieldsArray.find(f => f.name === 'medication')).label}</dt>
                <dd
                  name="medication"
                  key={123} >{data.medication ? data.medication : ""}

                </dd>
                <dt key={14} htmlFor="comments">{(fieldsArray.find(f => f.name === 'comments')).label}</dt>
                <dd
                  name="comments"
                  key={124} >{data.comments ? data.comments : ""}

                </dd>





              </dl>

            </div>

          ))
        }
        {items.length === 0 &&

        <div>
          <Link key={66}
            to={'/userdata/new'}
            className="actionupload button"
          >
            data needed
          </Link>
          <p className='itemp'>To book a reading start by filling in the form, some basic information is needed about yourself like weight an height, make sure you specify the unit. Some information about your dietary habits, if you are vegan , on a restricted diet.. and medical history. You can write in english, spanish or french. </p>
          
          </div>

        }
      </fieldset>
    </section>
  );
}

export default UserData
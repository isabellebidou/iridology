import React, { useEffect, useState } from 'react';
import fieldsArray from "./userData/formFields";
import store from "./store";
import { Link } from "react-router-dom";

function UserData() {
  useEffect(() => {
    if (store.getState()) {
      console.log(store.getState().auth)
    }

    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const userData = await fetch(`/api/user_data/`);
    const items = await userData.json();
    setItems(items);

  };

  const labels = fieldsArray.reduce((acc, field) => {
    acc.push(field.label);
    return acc;
  }, []);

  return (
    <section>
      <fieldset>
        <legend><h2> Information </h2></legend>
        <div>
          <Link to="/userdata/edit" className="">
            <button className="actionupload">edit data</button>
          </Link>
        </div>


        {
          items.map(data => (
            
              <div className="col" key={'777'}>
             <dl className = "userdatadl"  key={0}>

                  <dt key={1} htmlFor="name">first and last name</dt>
                  <dd
                    name="name"
                    key={111}>
                    {data.name ? data.name : ""}
                    
                    </dd>
                  <dt key={2} htmlFor="gender">{(fieldsArray.find(f => f.name === 'gender')).label}</dt>
                  <dd
                    name="gender"
                    key={112}>
                    {data.gender ? data.gender : ""}
                     
                    </dd>
                  <dt key={3} htmlFor="weight">{(fieldsArray.find(f => f.name === 'weight')).label}</dt>
                  <dd
                    name="weight"
                    key={113}>
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
                    key={117 }>{data.gluten ? data.gluten : ""}
                     
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
                    key={121 }>{data.bloodType ? data.bloodType : ""}
                     
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
      </fieldset>
    </section>
  );
}

export default UserData
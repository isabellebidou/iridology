import React, { useEffect, useState } from 'react';
import store from "./store";
import fieldsArray from "./userData/formFields";

function SelectedUserData() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    if (store.getState().selectedUser) {
      const userId = store.getState().selectedUser;
      const userData = await fetch(`/api/user_data/${userId}`);
      const items = await userData.json();
      setItems(items);
    }
  };

  return (
    <section>
      {
        items.map(data => (
          <form key={888}>
            <div className="col" key={'777'}>
              <div className="" key={1}>

                <label key={3333} htmlFor="fname">{(fieldsArray.find(f => f.name === 'fname')).label}</label>
                <input
                  name="fname"
                  key={1111}
                  type="text"
                  defaultValue={data.fname ? data.fname : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />

                <label key={4433} htmlFor="lname">{(fieldsArray.find(f => f.name === 'lname')).label}</label>
                <input
                  name="lname"
                  key={111}
                  type="text"
                  defaultValue={data.lname ? data.lname : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={2} htmlFor="gender">{(fieldsArray.find(f => f.name === 'gender')).label}</label>
                <input
                  name="gender"
                  key={112}
                  type="text"
                  defaultValue={data.gender ? data.gender : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={3} htmlFor="weight">{(fieldsArray.find(f => f.name === 'weight')).label}</label>
                <input
                  name="weight"
                  key={113}
                  type="number"
                  placeholder={data.weight ? data.weight : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={4} htmlFor="height">{(fieldsArray.find(f => f.name === 'height')).label}</label>
                <input
                  name="height"
                  key={114}
                  type="number"
                  defaultValue={data.height ? data.height : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={5} htmlFor="history">{(fieldsArray.find(f => f.name === 'history')).label}</label>
                <input
                  name="history"
                  key={115}
                  type="text"
                  defaultValue={data.history ? data.history : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={6} htmlFor="genetics">{(fieldsArray.find(f => f.name === 'genetics')).label}</label>
                <input
                  name="genetics"
                  key={116}
                  type="text"
                  defaultValue={data.genetics ? data.genetics : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={7} htmlFor="gluten">{(fieldsArray.find(f => f.name === 'gluten')).label}</label>
                <input
                  name="gluten"
                  key={117}
                  type="text"
                  defaultValue={data.gluten ? data.gluten : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={8} htmlFor="dairy">{(fieldsArray.find(f => f.name === 'dairy')).label}</label>
                <input
                  name="dairy"
                  key={118}
                  type="text"
                  defaultValue={data.dairy ? data.dairy : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={9} htmlFor="eatingHabits">{(fieldsArray.find(f => f.name === 'eatingHabits')).label}</label>
                <input
                  name="eatingHabits"
                  key={119}
                  type="text"
                  defaultValue={data.eatingHabits ? data.eatingHabits : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                  <label key={10} htmlFor="dentalHistory">{(fieldsArray.find(f => f.name === 'dentalHistory')).label}</label>
                <input
                  name="dentalHistory"
                  key={120}
                  type="text"
                  defaultValue={data.dentalHistory ? data.dentalHistory : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={11} htmlFor="bloodType">{(fieldsArray.find(f => f.name === 'bloodType')).label}</label>
                <input
                  name="bloodType"
                  key={121}
                  type="text"
                  defaultValue={data.bloodType ? data.bloodType : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={12} htmlFor="digestion">{(fieldsArray.find(f => f.name === 'digestion')).label}</label>
                <input
                  name="digestion"
                  key={122}
                  type="text"
                  defaultValue={data.digestion ? data.digestion : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={13} htmlFor="medication">{(fieldsArray.find(f => f.name === 'medication')).label}</label>
                <input
                  name="medication"
                  key={123}
                  type="text"
                  defaultValue={data.medication ? data.medication : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />
                <label key={14} htmlFor="comments">{(fieldsArray.find(f => f.name === 'comments')).label}</label>
                <input
                  name="comments"
                  key={124}
                  type="text"
                  defaultValue={data.comments ? data.comments : ""}
                  onChange={(e) => {
                    this.updateStateValue(e.target.name, e.target.value);
                  }}
                />

                <p key={63} >
                  <button className="rightbutton"
                    onClick={() => {
                      this.handleClick();
                    }}
                    type="submit"
                  >
                    edit
                  </button>
                </p>
              </div>
            </div>
          </form>
        ))
      }
    </section>
  );
}

export default SelectedUserData
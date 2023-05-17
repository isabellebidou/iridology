import React, { useEffect, useState } from 'react';
import store from "../store";
import UploadDocument from './UploadDocument';
import axios from "axios";


function SelectedReadingList() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const [visibility, setVisibility] = useState("hidden");
    const [editMode, setEditMode] = useState(false);
    const [selectedPdfs, setSelectedPdfs] = useState([]);

    const fetchItems = async () => {
        if (store.getState().selectedUser) {
            const userId = store.getState().selectedUser;
            const userData = await fetch(`/api/readings/${userId}`);
            const items = await userData.json();
            setItems(items);
        }
    };
    const handleEditButtonToggleText = () => {
        return editMode ? 'Disable edit' : 'Enable edit';
    }
    const toggleEditMode = () => {
        setEditMode(!editMode)
        setVisibility(visibility === 'visible' ? 'hidden' : 'visible');

    }
    const handleSelected = (e) => {
        if (selectedPdfs.includes(e.target.value)) {
            //remove item
            // find index
            var myIndex = selectedPdfs.indexOf(e.target.value);
            var myArray = [...selectedPdfs];
            myArray.splice(myIndex, 1);
            setSelectedPdfs(myArray);
        } else {
            // add item
            setSelectedPdfs([...selectedPdfs, e.target.value]);
        }
    }
    const deletePdfs = async () => {

        try {
            await axios.delete("/api/document/delete", {
                data: { idsToDelete: selectedPdfs }
            })
                .then(function (response) {
                    // handle success
                    setSelectedPdfs([])


                }).catch(function (error) {
                    // handle error

                })
                .finally(function () {
                    // always executed
                });
        } catch (error) {

        }

    }

    return (
        <section>
            <fieldset>
                <legend><h2> Readings </h2></legend>
                <div className="grid-container">
                    {
                        items.map(reading => {
                            return (


                                <div className="item photoThumbnail" key={reading._id}>

                                    <p className="item">
                                        Expectations: {reading.expectations} <br />Reading ordered on: {new Date(reading.dateSent).toLocaleDateString()}

                                        <br />
                                        {reading.dateCompleted &&
                                            <span>Date Completed: {new Date(reading.dateCompleted).toLocaleDateString()}</span>
                                        }

                                        <br /><UploadDocument
                                            readingId={reading._id}

                                        />
                                        {reading.pdfPath && reading.pdfUrl && (
                                            <div>

                                                <a href={reading.pdfUrl}>
                                                    document ready
                                                </a>
                                                <input type={'checkbox'} value={reading.pdfPath} style={{ visibility }} onChange={handleSelected}></input>
                                            </div>
                                        )}
                                    </p>
                                </div>


                            );

                        })
                    }
                </div>
                {items.length >= 1 &&
                    <>
                        <button id="editeyes" className="editeyes" onClick={toggleEditMode}>{handleEditButtonToggleText()}</button>
                        <button id="deleteeyes" className="deleteeyes" onClick={deletePdfs} style={{ visibility }} >Delete Selected</button>
                    </>
                }
            </fieldset>
        </section>
    );
}

export default SelectedReadingList
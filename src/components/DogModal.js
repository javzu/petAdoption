import React from "react";
import { Modal } from '@mui/material';
import DogCard from "./DogCard";


const DogModal = ({
    Open,
    Close,
    ImageUri,
}) => {
    return (
        <div>
            <Modal
                open={Open}
                onClose={Close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    width: '100%',
                    top: '20%',
                    height: 500,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: '#AFF',
                    alignSelf: 'center',
                }}
            >
                <div>
                    <DogCard
                    ImageUri={ImageUri}
                    index={1}
                    CanOpenModal={false}
                />
                <p style={{color:'#FFF'}}>Maybe some information about the dog that could come with the image </p>  
                </div>
              
            </Modal>
        </div>

    );
};

export default DogModal;
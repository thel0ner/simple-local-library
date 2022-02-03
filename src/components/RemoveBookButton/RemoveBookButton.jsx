import React from "react";
import { Button } from 'react-bootstrap';
import { BsFillTrashFill } from 'react-icons/bs';
const RemoveBookButton = ({callback}) => {
    return(
        <>
            <Button variant='danger' size='small' onClick={() => callback()}>
                <BsFillTrashFill />
            </Button>
        </>
    );
};

export default RemoveBookButton;
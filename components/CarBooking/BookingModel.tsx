import React from "react";
import CarCard from "../Home/CarCard";
import Form from "./Form";

function BookingModel({ car }: any) {
  return (
    <div className="modal-box w-11/12 max-w-5xl">
      <div className="border-b-[1px] pb-2 ">
        <h3 className=" text-[30px] font-light text-gray-400">
          Alugue Agora Mesmo!
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <CarCard car={car} />
        </div>
        <div>
          <Form car={car}/>
        </div>
      </div>
      <div className="modal-action">
        {/* if there is a button, it will close the modal */}
      </div>
    </div>
  );
}

export default BookingModel;

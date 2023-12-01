import React from "react";
import Link from 'next/link';

function Getstart() {
  return (
    <div className="getstart">
      <div className="getstart-text">
          <h1>เริ่มต้นการเรียนรู้กับเรา</h1>
        </div>
      <div className="getstart-column columns-3 ">

        <Link href="/learn" className="getstart-button flex justify-center w-full py-3 gap-2">
          <button className="btn btn-lg bg-green-400">Learn</button>
        </Link>

        <div className="getstart-text flex justify-center w-full py-3 gap-2">OR</div>
        <Link href="/practice " className="getstart-button flex justify-center w-full py-3 gap-2">
          <button className="getstart-btn btn btn-lg bg-primary">Practice</button>
        </Link>

      </div>
    </div>
  );
}


export default Getstart;
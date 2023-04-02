import Image from 'next/image'
import Head from 'next/head'
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
<<<<<<< HEAD
import styles from "../styles/Home.module.css";
import styles from "../styles/index.css";
=======
import Popup from 'reactjs-popup'
import 'popper.js'

>>>>>>> 11d04a81b4f39124e78a75c4e1ed198d132c954d


export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    console.log('Image clicked');
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
    <Head>
        <title>ByteLingo: Home</title>
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      </Head>

      <main className="flex flex-col items-center justify-center w-full h-full flex-1 px-20 text-center">
        <div className="border border-gray-600 bg-white text-black w-full py-12 px-12">
        <div className="text-center">
          <h1 className="mb-5">Welcome to ByteLingo</h1>
        </div>
          <div className="py-3">
            <div className="grid grid-cols-3 gap-4 items-center ">
              <div className="grid grid-rows-3 flex justify-center bg-gray-100 border border-gray-600 rounded-lg px-2 py-10 m-2">
                <h3>Python</h3>
                <div>
                  An intuitive, high-level language that emphasizes code readability.
                </div>
                <div className="mb-5">
                  <a href="/python">
                  <button type="button" className="btn btn-success">Start</button>
                  </a>
                </div>
              </div>
              <div className="grid grid-rows-3 flex justify-center bg-gray-100 border border-gray-600 rounded-lg px-2 py-10 m-2">
                <h3>Java</h3>
                <div>
                  A programming language that is compatible with many different operating environments.
                </div>
                <div className="mb-5">
                  <a href="/java">
                  <button type="button" className="btn btn-success">Start</button>
                  </a>
                </div>                
                </div>
              <div className="grid grid-rows-3 flex justify-center bg-gray-100 border border-gray-600 rounded-lg px-2 py-10 m-2">
                <h3>C</h3>
                <div>
                  A powerful, low-level language that can be used to write flexible code.
                </div>
                <div className="mb-5">
                  <a href="/c">
                  <button type="button" className="btn btn-success">Start</button>
                  </a>
                </div>  
                </div>
            </div> 
          </div>
        </div>
        <Image src="/hapy.png" alt="" width={350} height={300}/>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
          Talk to Byte
        </button>

        <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h4 className="modal-title">Byte's bytes</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
            01001001 01100110 00100000 01111001 01101111 01110101 00100000 01100110 01100001 01101001 01101100 00100000 01110100 01101000 01101001 01110011 00100000 01100111 01100001 01101101 01100101 00101100 00100000 01001001 00100000 01110111 01101001 01101100 01101100 00100000 01100101 01100001 01110100 00100000 01111001 01101111 
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>



    </main>
    </div>
  )
}

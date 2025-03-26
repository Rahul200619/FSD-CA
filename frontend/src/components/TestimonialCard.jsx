import {react,useState} from "react";
import {useNavigate} from "react-router-dom";
import API from "../api";

function TestimonialCard(client){
    const [client,setClient]=useState({
        name:"",
        review:"",
    })
    const navigate=useNavigate();
    const handleChange=(e)=>{
        setClient({...client,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
        await API.post("/client/add/")
        .then((res)=>setClient(res.data))
        .catch((err)=>console.error("error adding client name and review",err))        
    }

    return(
        <div className="testimonial-card">
            <h3>TestimonialCard</h3>
            <p>{client.name}</p>
            <p>review:{client.review}</p>

            <button onclick={navigate("/")}></button>
        </div>
    )

  
}

export default TestimonialCard;

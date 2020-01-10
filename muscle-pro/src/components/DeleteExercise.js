// import React, { Component } from 'react';

// import {connect} from 'react-redux';

// class DeleteExercise extends Component {
//   render() {
//   return (
//     <div>

//       <button 
//       onClick={()=>this.props.dispatch({type:'DELETE_EXERCISE_START',id:this.props.post.id})}>
//       Delete</button>
//     </div>
//   );
//  }
// }
// export default connect()(DeleteExercise);








import React, { useState, useEffect } from 'react'

import  axiosWithAuth  from '../utils/axiosWithAuth'

function DeleteExercise(props) {

    const [exerciseDelete, setExerciseDelete] = useState('');
    const [exercise, setExercise] = useState();

    console.log('delete', exercise)

    useEffect(() => {
        if(exerciseDelete)
        axiosWithAuth()
            .get(`https://weight-lifting1.herokuapp.com/api/user/delete`)
            .then(res => {
                console.log(res)
                setExerciseDelete(res.data)
            })
            .catch(err => console.log(err))
    }, [ exerciseDelete ]);

    const deleteExercise = (event, exercise) => {
        event.preventDefault()
        axiosWithAuth()
            .delete(`https://weight-lifting1.herokuapp.com/api/user/delete`)
            .then(res => {
                console.log(res)
                // props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    return(
        <form>
            <button onClick={(event) => deleteExercise(event, exercise)}>Delete Exercise</button>
        </form>
    )
}

export default DeleteExercise


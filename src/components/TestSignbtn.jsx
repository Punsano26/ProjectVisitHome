import React from 'react'
import UserService from 'services/user.service'

const TestSignbtn = () => {
    const tEmail = "bp999@bangpaeschool.ac.th"

    const handleSignInTest =  async () => {
        try {
            const response = await UserService.login({ email: tEmail }); 
            console.log("Sign-in successful:", response);
        } catch (error) {
          console.log("Signing in with:", tEmail);  
        }
        
    }
  return (
    <button className='btn-scc' onClick={handleSignInTest}>TestSign</button>
  )
}

export default TestSignbtn
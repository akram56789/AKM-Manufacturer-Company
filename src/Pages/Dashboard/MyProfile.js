import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
  const [user] = useAuthState(auth)
    return (
        <div class="hero ">
        <div class="hero-content flex-col lg:flex-row-reverse">
        
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body w-96">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input type="text"  defaultValue={user.displayName} class="input input-bordered" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="email"  defaultValue={user.email}  class="input input-bordered" />
               
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="number"  defaultValue={user.phoneNumber}  class="input input-bordered" />
               
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Address</span>
                </label>
                <input type="text"     class="input input-bordered" />
               
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyProfile;
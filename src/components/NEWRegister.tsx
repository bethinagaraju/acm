// // // // // // // // // // // // // // // // import React from 'react';
// // // // // // // // // // // // // // // // import axios from 'axios';

// // // // // // // // // // // // // // // // const NEWRegister: React.FC = () => {
// // // // // // // // // // // // // // // //   const handleSubmit = async () => {
// // // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // // //       const payload = {
// // // // // // // // // // // // // // // //         title: 'Mr',
// // // // // // // // // // // // // // // //         fullName: 'Raj',
// // // // // // // // // // // // // // // //         phone: '9999999999',
// // // // // // // // // // // // // // // //         email: 'raj@gmail.com',
// // // // // // // // // // // // // // // //         institute: 'ABC College',
// // // // // // // // // // // // // // // //         country: 'India',
// // // // // // // // // // // // // // // //         registrationType: 'Speaker',
// // // // // // // // // // // // // // // //         presentationType: 'Oral',
// // // // // // // // // // // // // // // //         numberOfNights: 2,
// // // // // // // // // // // // // // // //       };

// // // // // // // // // // // // // // // //       const res = await axios.post('http://localhost:8080/api/registration/create', payload);

// // // // // // // // // // // // // // // //       const { checkoutUrl, referenceId } = res.data;

// // // // // // // // // // // // // // // //       // Redirect to Whop
// // // // // // // // // // // // // // // //       window.location.href = `${checkoutUrl}?ref=${referenceId}`;
// // // // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // // // //       // eslint-disable-next-line no-console
// // // // // // // // // // // // // // // //       console.error('Registration error', err);
// // // // // // // // // // // // // // // //       alert('Registration failed. Please try again.');
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <div className="py-8 px-4">
// // // // // // // // // // // // // // // //       <button
// // // // // // // // // // // // // // // //         onClick={handleSubmit}
// // // // // // // // // // // // // // // //         className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
// // // // // // // // // // // // // // // //       >
// // // // // // // // // // // // // // // //         Proceed to Payment
// // // // // // // // // // // // // // // //       </button>
// // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // export default NEWRegister;






// // // // // // // // // // // // // // // import React from 'react';
// // // // // // // // // // // // // // // import axios from 'axios';

// // // // // // // // // // // // // // // const NEWRegister: React.FC = () => {

// // // // // // // // // // // // // // //   const handleSubmit = async () => {
// // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // //       const payload = {
// // // // // // // // // // // // // // //         fullName: 'Raj',
// // // // // // // // // // // // // // //         email: 'raj@gmail.com',
// // // // // // // // // // // // // // //       };

// // // // // // // // // // // // // // //       const res = await axios.post(
// // // // // // // // // // // // // // //         'http://localhost:8080/api/registration/create',
// // // // // // // // // // // // // // //         payload
// // // // // // // // // // // // // // //       );

// // // // // // // // // // // // // // //       const { checkoutUrl, referenceId } = res.data;

// // // // // // // // // // // // // // //       // ✅ Store referenceId for later verification
// // // // // // // // // // // // // // //       localStorage.setItem('referenceId', referenceId);

// // // // // // // // // // // // // // //       // ✅ Redirect to Whop (DO NOT modify URL)
// // // // // // // // // // // // // // //       window.location.href = checkoutUrl;

// // // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // // //       console.error('Registration error', err);
// // // // // // // // // // // // // // //       alert('Registration failed. Please try again.');
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <div className="py-8 px-4">
// // // // // // // // // // // // // // //       <button
// // // // // // // // // // // // // // //         onClick={handleSubmit}
// // // // // // // // // // // // // // //         className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
// // // // // // // // // // // // // // //       >
// // // // // // // // // // // // // // //         Proceed to Payment
// // // // // // // // // // // // // // //       </button>
// // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default NEWRegister;






// // // // // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // // // // import axios from 'axios';

// // // // // // // // // // // // // // // Interface matching your Backend Entity
// // // // // // // // // // // // // // interface FormData {
// // // // // // // // // // // // // //   planId: string;
// // // // // // // // // // // // // //   conferenceCode: string;
// // // // // // // // // // // // // //   title: string;
// // // // // // // // // // // // // //   fullName: string;
// // // // // // // // // // // // // //   email: string;
// // // // // // // // // // // // // //   phone: string;
// // // // // // // // // // // // // //   institute: string;
// // // // // // // // // // // // // //   country: string;
// // // // // // // // // // // // // //   registrationType: string;
// // // // // // // // // // // // // //   presentationType: string;
// // // // // // // // // // // // // //   numberOfNights: number;
// // // // // // // // // // // // // //   numberOfGuests: number;
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // const NEWRegister: React.FC = () => {
// // // // // // // // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // // // // // // // //   // Initial State
// // // // // // // // // // // // // //   const [formData, setFormData] = useState<FormData>({
// // // // // // // // // // // // // //     planId: 'plan_HcVxJS4fF80A2', // 🔑 Your Whop Plan ID
// // // // // // // // // // // // // //     conferenceCode: 'AI-ROBO-2026',
// // // // // // // // // // // // // //     title: 'Dr.',
// // // // // // // // // // // // // //     fullName: '',
// // // // // // // // // // // // // //     email: '',
// // // // // // // // // // // // // //     phone: '',
// // // // // // // // // // // // // //     institute: '',
// // // // // // // // // // // // // //     country: '',
// // // // // // // // // // // // // //     registrationType: 'Speaker',
// // // // // // // // // // // // // //     presentationType: 'Oral',
// // // // // // // // // // // // // //     numberOfNights: 0,
// // // // // // // // // // // // // //     numberOfGuests: 0,
// // // // // // // // // // // // // //   });

// // // // // // // // // // // // // //   // Handle Input Change
// // // // // // // // // // // // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
// // // // // // // // // // // // // //     const { name, value } = e.target;
// // // // // // // // // // // // // //     setFormData((prev) => ({
// // // // // // // // // // // // // //       ...prev,
// // // // // // // // // // // // // //       [name]: name === 'numberOfNights' || name === 'numberOfGuests' ? Number(value) : value,
// // // // // // // // // // // // // //     }));
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   // Handle Form Submission
// // // // // // // // // // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // // // // // // // // // //     e.preventDefault(); // Prevent page reload
// // // // // // // // // // // // // //     if (loading) return;
// // // // // // // // // // // // // //     setLoading(true);

// // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // //       console.log('Sending Payload:', formData);

// // // // // // // // // // // // // //       // 🚀 API Call to Spring Boot
// // // // // // // // // // // // // //       const res = await axios.post(
// // // // // // // // // // // // // //         'http://localhost:8080/api/registration/create',
// // // // // // // // // // // // // //         formData
// // // // // // // // // // // // // //       );

// // // // // // // // // // // // // //       console.log('API Response:', res.data);

// // // // // // // // // // // // // //       const { checkoutUrl, stateId } = res.data;

// // // // // // // // // // // // // //       // ✅ Store stateId for tracking if needed
// // // // // // // // // // // // // //       if (stateId) {
// // // // // // // // // // // // // //         localStorage.setItem('registrationStateId', stateId);
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //       // ✅ Redirect to Whop Checkout
// // // // // // // // // // // // // //       if (checkoutUrl) {
// // // // // // // // // // // // // //         window.location.href = checkoutUrl;
// // // // // // // // // // // // // //       } else {
// // // // // // // // // // // // // //         alert('Error: No checkout URL received.');
// // // // // // // // // // // // // //       }

// // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // //       console.error('Registration error', err);
// // // // // // // // // // // // // //       alert('Registration failed. Please check console for details.');
// // // // // // // // // // // // // //     } finally {
// // // // // // // // // // // // // //       setLoading(false);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className="max-w-xl mx-auto py-8 px-4">
// // // // // // // // // // // // // //       <h2 className="text-2xl font-bold mb-6 text-center">Conference Registration</h2>
      
// // // // // // // // // // // // // //       <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded-lg">
        
// // // // // // // // // // // // // //         {/* Full Name */}
// // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // //           <label className="block text-sm font-medium text-gray-700">Full Name</label>
// // // // // // // // // // // // // //           <input
// // // // // // // // // // // // // //             type="text"
// // // // // // // // // // // // // //             name="fullName"
// // // // // // // // // // // // // //             value={formData.fullName}
// // // // // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // // // // //             required
// // // // // // // // // // // // // //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
// // // // // // // // // // // // // //             placeholder="John Doe"
// // // // // // // // // // // // // //           />
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Email */}
// // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // //           <label className="block text-sm font-medium text-gray-700">Email Address</label>
// // // // // // // // // // // // // //           <input
// // // // // // // // // // // // // //             type="email"
// // // // // // // // // // // // // //             name="email"
// // // // // // // // // // // // // //             value={formData.email}
// // // // // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // // // // //             required
// // // // // // // // // // // // // //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
// // // // // // // // // // // // // //             placeholder="john@example.com"
// // // // // // // // // // // // // //           />
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Phone */}
// // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // //           <label className="block text-sm font-medium text-gray-700">Phone Number</label>
// // // // // // // // // // // // // //           <input
// // // // // // // // // // // // // //             type="tel"
// // // // // // // // // // // // // //             name="phone"
// // // // // // // // // // // // // //             value={formData.phone}
// // // // // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // // // // //             required
// // // // // // // // // // // // // //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
// // // // // // // // // // // // // //             placeholder="+1 234 567 890"
// // // // // // // // // // // // // //           />
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Institute */}
// // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // //           <label className="block text-sm font-medium text-gray-700">Institute / Organization</label>
// // // // // // // // // // // // // //           <input
// // // // // // // // // // // // // //             type="text"
// // // // // // // // // // // // // //             name="institute"
// // // // // // // // // // // // // //             value={formData.institute}
// // // // // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // // // // //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
// // // // // // // // // // // // // //           />
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Registration Type */}
// // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // //           <label className="block text-sm font-medium text-gray-700">Registration Type</label>
// // // // // // // // // // // // // //           <select
// // // // // // // // // // // // // //             name="registrationType"
// // // // // // // // // // // // // //             value={formData.registrationType}
// // // // // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // // // // //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <option value="Speaker">Speaker</option>
// // // // // // // // // // // // // //             <option value="Listener">Listener</option>
// // // // // // // // // // // // // //             <option value="Student">Student</option>
// // // // // // // // // // // // // //           </select>
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Plan ID (Hidden or Visible depending on logic) */}
// // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // //            <label className="block text-sm font-medium text-gray-700">Plan ID (Testing)</label>
// // // // // // // // // // // // // //            <input
// // // // // // // // // // // // // //              type="text"
// // // // // // // // // // // // // //              name="planId"
// // // // // // // // // // // // // //              value={formData.planId}
// // // // // // // // // // // // // //              onChange={handleChange}
// // // // // // // // // // // // // //              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm p-2 border"
// // // // // // // // // // // // // //            />
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Submit Button */}
// // // // // // // // // // // // // //         <button
// // // // // // // // // // // // // //           type="submit"
// // // // // // // // // // // // // //           disabled={loading}
// // // // // // // // // // // // // //           className={`w-full text-white px-4 py-3 rounded-md font-bold transition-colors ${
// // // // // // // // // // // // // //             loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
// // // // // // // // // // // // // //           }`}
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           {loading ? 'Processing...' : 'Proceed to Payment'}
// // // // // // // // // // // // // //         </button>

// // // // // // // // // // // // // //       </form>
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default NEWRegister;



// // // // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // // // import axios from 'axios';

// // // // // // // // // // // // // // Interface matching Backend Entity
// // // // // // // // // // // // // interface FormData {
// // // // // // // // // // // // //   planId: string;
// // // // // // // // // // // // //   conferenceCode: string;
// // // // // // // // // // // // //   title: string;
// // // // // // // // // // // // //   fullName: string;
// // // // // // // // // // // // //   email: string;
// // // // // // // // // // // // //   phone: string;
// // // // // // // // // // // // //   institute: string;
// // // // // // // // // // // // //   country: string;
// // // // // // // // // // // // //   registrationType: string;
// // // // // // // // // // // // //   presentationType: string;
// // // // // // // // // // // // //   numberOfNights: number;
// // // // // // // // // // // // //   numberOfGuests: number;
// // // // // // // // // // // // // }

// // // // // // // // // // // // // const NEWRegister: React.FC = () => {
// // // // // // // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // // // // // // //   // Initial State
// // // // // // // // // // // // //   const [formData, setFormData] = useState<FormData>({
// // // // // // // // // // // // //     planId: 'plan_HcVxJS4fF80A2', // Whop Plan ID
// // // // // // // // // // // // //     conferenceCode: 'AI-ROBO-2026', // FIXED
// // // // // // // // // // // // //     title: 'Dr.',
// // // // // // // // // // // // //     fullName: '',
// // // // // // // // // // // // //     email: '',
// // // // // // // // // // // // //     phone: '',
// // // // // // // // // // // // //     institute: '',
// // // // // // // // // // // // //     country: '',
// // // // // // // // // // // // //     registrationType: 'Speaker',
// // // // // // // // // // // // //     presentationType: 'Oral',
// // // // // // // // // // // // //     numberOfNights: 0,
// // // // // // // // // // // // //     numberOfGuests: 0,
// // // // // // // // // // // // //   });

// // // // // // // // // // // // //   // Handle Input Change
// // // // // // // // // // // // //   const handleChange = (
// // // // // // // // // // // // //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// // // // // // // // // // // // //   ) => {
// // // // // // // // // // // // //     const { name, value } = e.target;
// // // // // // // // // // // // //     setFormData((prev) => ({
// // // // // // // // // // // // //       ...prev,
// // // // // // // // // // // // //       [name]:
// // // // // // // // // // // // //         name === 'numberOfNights' || name === 'numberOfGuests'
// // // // // // // // // // // // //           ? Number(value)
// // // // // // // // // // // // //           : value,
// // // // // // // // // // // // //     }));
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Handle Form Submission
// // // // // // // // // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // // //     if (loading) return;
// // // // // // // // // // // // //     setLoading(true);

// // // // // // // // // // // // //     try {
// // // // // // // // // // // // //       console.log('Sending Payload:', formData);

// // // // // // // // // // // // //       const res = await axios.post(
// // // // // // // // // // // // //         'http://localhost:8080/api/registration/create',
// // // // // // // // // // // // //         formData
// // // // // // // // // // // // //       );

// // // // // // // // // // // // //       console.log('API Response:', res.data);

// // // // // // // // // // // // //       const { checkoutUrl, stateId } = res.data;

// // // // // // // // // // // // //       if (stateId) {
// // // // // // // // // // // // //         localStorage.setItem('registrationStateId', stateId);
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       if (checkoutUrl) {
// // // // // // // // // // // // //         window.location.href = checkoutUrl;
// // // // // // // // // // // // //       } else {
// // // // // // // // // // // // //         alert('Checkout URL not received');
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // // //       console.error('Registration failed', error);
// // // // // // // // // // // // //       alert('Registration failed. Check console.');
// // // // // // // // // // // // //     } finally {
// // // // // // // // // // // // //       setLoading(false);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="max-w-xl mx-auto py-10 px-4">
// // // // // // // // // // // // //       <h2 className="text-2xl font-bold mb-6 text-center">
// // // // // // // // // // // // //         Conference Registration
// // // // // // // // // // // // //       </h2>

// // // // // // // // // // // // //       <form
// // // // // // // // // // // // //         onSubmit={handleSubmit}
// // // // // // // // // // // // //         className="space-y-4 bg-white p-6 shadow rounded-lg"
// // // // // // // // // // // // //       >
// // // // // // // // // // // // //         {/* Conference Code (Fixed) */}
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // // // // //             Conference Code
// // // // // // // // // // // // //           </label>
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="text"
// // // // // // // // // // // // //             name="conferenceCode"
// // // // // // // // // // // // //             value={formData.conferenceCode}
// // // // // // // // // // // // //             disabled
// // // // // // // // // // // // //             className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 p-2 border cursor-not-allowed"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Title */}
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // // // // //             Title
// // // // // // // // // // // // //           </label>
// // // // // // // // // // // // //           <select
// // // // // // // // // // // // //             name="title"
// // // // // // // // // // // // //             value={formData.title}
// // // // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // // // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <option>Mr.</option>
// // // // // // // // // // // // //             <option>Ms.</option>
// // // // // // // // // // // // //             <option>Mrs.</option>
// // // // // // // // // // // // //             <option>Dr.</option>
// // // // // // // // // // // // //             <option>Prof.</option>
// // // // // // // // // // // // //           </select>
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Full Name */}
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // // // // //             Full Name
// // // // // // // // // // // // //           </label>
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="text"
// // // // // // // // // // // // //             name="fullName"
// // // // // // // // // // // // //             value={formData.fullName}
// // // // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // // // //             required
// // // // // // // // // // // // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Email */}
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // // // // //             Email
// // // // // // // // // // // // //           </label>
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="email"
// // // // // // // // // // // // //             name="email"
// // // // // // // // // // // // //             value={formData.email}
// // // // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // // // //             required
// // // // // // // // // // // // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Phone */}
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // // // // //             Phone
// // // // // // // // // // // // //           </label>
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="tel"
// // // // // // // // // // // // //             name="phone"
// // // // // // // // // // // // //             value={formData.phone}
// // // // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // // // //             required
// // // // // // // // // // // // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Institute */}
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // // // // //             Institute / Organization
// // // // // // // // // // // // //           </label>
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="text"
// // // // // // // // // // // // //             name="institute"
// // // // // // // // // // // // //             value={formData.institute}
// // // // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // // // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Country */}
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // // // // //             Country
// // // // // // // // // // // // //           </label>
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="text"
// // // // // // // // // // // // //             name="country"
// // // // // // // // // // // // //             value={formData.country}
// // // // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // // // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Registration Type */}
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // // // // //             Registration Type
// // // // // // // // // // // // //           </label>
// // // // // // // // // // // // //           <select
// // // // // // // // // // // // //             name="registrationType"
// // // // // // // // // // // // //             value={formData.registrationType}
// // // // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // // // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <option value="Speaker">Speaker</option>
// // // // // // // // // // // // //             <option value="Listener">Listener</option>
// // // // // // // // // // // // //             <option value="Student">Student</option>
// // // // // // // // // // // // //           </select>
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Presentation Type */}
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // // // // //             Presentation Type
// // // // // // // // // // // // //           </label>
// // // // // // // // // // // // //           <select
// // // // // // // // // // // // //             name="presentationType"
// // // // // // // // // // // // //             value={formData.presentationType}
// // // // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // // // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <option value="Oral">Oral</option>
// // // // // // // // // // // // //             <option value="Poster">Poster</option>
// // // // // // // // // // // // //             <option value="Virtual">Virtual</option>
// // // // // // // // // // // // //           </select>
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Number of Nights */}
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // // // // //             Number of Nights
// // // // // // // // // // // // //           </label>
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="number"
// // // // // // // // // // // // //             name="numberOfNights"
// // // // // // // // // // // // //             value={formData.numberOfNights}
// // // // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // // // //             min={0}
// // // // // // // // // // // // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Number of Guests */}
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // // // // //             Number of Guests
// // // // // // // // // // // // //           </label>
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="number"
// // // // // // // // // // // // //             name="numberOfGuests"
// // // // // // // // // // // // //             value={formData.numberOfGuests}
// // // // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // // // //             min={0}
// // // // // // // // // // // // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Plan ID (Visible for Testing) */}
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <label className="block text-sm font-medium text-gray-700">
// // // // // // // // // // // // //             Plan ID
// // // // // // // // // // // // //           </label>
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="text"
// // // // // // // // // // // // //             name="planId"
// // // // // // // // // // // // //             value={formData.planId}
// // // // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // // // //             className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 p-2 border"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Submit Button */}
// // // // // // // // // // // // //         <button
// // // // // // // // // // // // //           type="submit"
// // // // // // // // // // // // //           disabled={loading}
// // // // // // // // // // // // //           className={`w-full text-white px-4 py-3 rounded-md font-bold ${
// // // // // // // // // // // // //             loading
// // // // // // // // // // // // //               ? 'bg-gray-400 cursor-not-allowed'
// // // // // // // // // // // // //               : 'bg-indigo-600 hover:bg-indigo-700'
// // // // // // // // // // // // //           }`}
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           {loading ? 'Processing...' : 'Proceed to Payment'}
// // // // // // // // // // // // //         </button>
// // // // // // // // // // // // //       </form>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default NEWRegister;








// // // // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // // // import axios from "axios";
// // // // // // // // // // // // import pricingData from "./pricing.json";

// // // // // // // // // // // // /* ---------------- TYPES ---------------- */

// // // // // // // // // // // // interface PricingItem {
// // // // // // // // // // // //   planId: string;
// // // // // // // // // // // //   registrationType: string;
// // // // // // // // // // // //   presentationType: string;
// // // // // // // // // // // //   nights: number;
// // // // // // // // // // // //   price: number;
// // // // // // // // // // // // }

// // // // // // // // // // // // interface FormData {
// // // // // // // // // // // //   planId: string;
// // // // // // // // // // // //   conferenceCode: string;
// // // // // // // // // // // //   title: string;
// // // // // // // // // // // //   fullName: string;
// // // // // // // // // // // //   email: string;
// // // // // // // // // // // //   phone: string;
// // // // // // // // // // // //   institute: string;
// // // // // // // // // // // //   country: string;
// // // // // // // // // // // //   registrationType: "registrationOnly" | "withAccommodation" | "virtual";
// // // // // // // // // // // //   presentationType: string;
// // // // // // // // // // // //   numberOfNights: number;
// // // // // // // // // // // //   numberOfGuests: number;
// // // // // // // // // // // // }

// // // // // // // // // // // // /* ---------------- COMPONENT ---------------- */

// // // // // // // // // // // // const NEWRegister: React.FC = () => {
// // // // // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // // // // //   const [price, setPrice] = useState<number>(0);

// // // // // // // // // // // //   const [formData, setFormData] = useState<FormData>({
// // // // // // // // // // // //     planId: "",
// // // // // // // // // // // //     conferenceCode: "AI-ROBO-2026",
// // // // // // // // // // // //     title: "",
// // // // // // // // // // // //     fullName: "",
// // // // // // // // // // // //     email: "",
// // // // // // // // // // // //     phone: "",
// // // // // // // // // // // //     institute: "",
// // // // // // // // // // // //     country: "",
// // // // // // // // // // // //     registrationType: "withAccommodation",
// // // // // // // // // // // //     presentationType: "Poster",
// // // // // // // // // // // //     numberOfNights: 0,
// // // // // // // // // // // //     numberOfGuests: 0,
// // // // // // // // // // // //   });

// // // // // // // // // // // //   /* ---------------- HELPERS ---------------- */

// // // // // // // // // // // //   const findPlan = () => {
// // // // // // // // // // // //     const plans = pricingData.pricing as PricingItem[];

// // // // // // // // // // // //     const match = plans.find(
// // // // // // // // // // // //       (p) =>
// // // // // // // // // // // //         p.registrationType === formData.registrationType &&
// // // // // // // // // // // //         p.presentationType === formData.presentationType &&
// // // // // // // // // // // //         p.nights === formData.numberOfNights
// // // // // // // // // // // //     );

// // // // // // // // // // // //     if (match) {
// // // // // // // // // // // //       setFormData((prev) => ({ ...prev, planId: match.planId }));
// // // // // // // // // // // //       setPrice(match.price);
// // // // // // // // // // // //     } else {
// // // // // // // // // // // //       setFormData((prev) => ({ ...prev, planId: "" }));
// // // // // // // // // // // //       setPrice(0);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   /* ---------------- EFFECTS ---------------- */

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     findPlan();
// // // // // // // // // // // //   }, [
// // // // // // // // // // // //     formData.registrationType,
// // // // // // // // // // // //     formData.presentationType,
// // // // // // // // // // // //     formData.numberOfNights,
// // // // // // // // // // // //   ]);

// // // // // // // // // // // //   /* ---------------- HANDLERS ---------------- */

// // // // // // // // // // // //   const handleChange = (
// // // // // // // // // // // //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// // // // // // // // // // // //   ) => {
// // // // // // // // // // // //     const { name, value } = e.target;
// // // // // // // // // // // //     setFormData((prev) => ({
// // // // // // // // // // // //       ...prev,
// // // // // // // // // // // //       [name]:
// // // // // // // // // // // //         name === "numberOfNights" || name === "numberOfGuests"
// // // // // // // // // // // //           ? Number(value)
// // // // // // // // // // // //           : value,
// // // // // // // // // // // //     }));
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // //     if (!formData.planId) {
// // // // // // // // // // // //       alert("No valid plan found");
// // // // // // // // // // // //       return;
// // // // // // // // // // // //     }

// // // // // // // // // // // //     setLoading(true);
// // // // // // // // // // // //     try {
// // // // // // // // // // // //       const res = await axios.post(
// // // // // // // // // // // //         "http://localhost:8080/api/registration/create",
// // // // // // // // // // // //         formData
// // // // // // // // // // // //       );
// // // // // // // // // // // //       window.location.href = res.data.checkoutUrl;
// // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // //       alert("Registration failed");
// // // // // // // // // // // //     } finally {
// // // // // // // // // // // //       setLoading(false);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   /* ---------------- UI ---------------- */

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="max-w-4xl mx-auto p-6">
// // // // // // // // // // // //       {/* HEADER */}
// // // // // // // // // // // //       <div className="bg-white rounded-xl shadow p-6 mb-6 grid md:grid-cols-3 gap-4 text-sm">
// // // // // // // // // // // //         <div>
// // // // // // // // // // // //           <p className="font-semibold">Conference Date</p>
// // // // // // // // // // // //           <p>May 29–31, 2026</p>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //         <div>
// // // // // // // // // // // //           <p className="font-semibold">Location</p>
// // // // // // // // // // // //           <p>DoubleTree by Hilton Tokyo Ariake</p>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //         <div>
// // // // // // // // // // // //           <p className="font-semibold">Registration Deadline</p>
// // // // // // // // // // // //           <p>March 30, 2026</p>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       <form onSubmit={handleSubmit} className="space-y-6">
// // // // // // // // // // // //         {/* BASIC DETAILS */}
// // // // // // // // // // // //         <div className="bg-white p-6 rounded-xl shadow grid md:grid-cols-2 gap-4">
// // // // // // // // // // // //           <select name="title" onChange={handleChange} className="border p-2 rounded">
// // // // // // // // // // // //             <option value="">Select Title (Optional)</option>
// // // // // // // // // // // //             <option>Mr.</option>
// // // // // // // // // // // //             <option>Ms.</option>
// // // // // // // // // // // //             <option>Dr.</option>
// // // // // // // // // // // //             <option>Prof.</option>
// // // // // // // // // // // //           </select>

// // // // // // // // // // // //           <input name="fullName" placeholder="Full Name *" required onChange={handleChange} className="border p-2 rounded" />
// // // // // // // // // // // //           <input name="phone" placeholder="Phone Number *" required onChange={handleChange} className="border p-2 rounded" />
// // // // // // // // // // // //           <input name="email" type="email" placeholder="Email Address *" required onChange={handleChange} className="border p-2 rounded" />
// // // // // // // // // // // //           <input name="institute" placeholder="Institute / Organization *" onChange={handleChange} className="border p-2 rounded" />
// // // // // // // // // // // //           <input name="country" placeholder="Country *" onChange={handleChange} className="border p-2 rounded" />
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* REGISTRATION TYPE */}
// // // // // // // // // // // //         <div className="bg-white p-6 rounded-xl shadow space-y-3">
// // // // // // // // // // // //           <p className="font-semibold">Registration Type *</p>
// // // // // // // // // // // //           {["registrationOnly", "withAccommodation", "virtual"].map((type) => (
// // // // // // // // // // // //             <label key={type} className="block">
// // // // // // // // // // // //               <input
// // // // // // // // // // // //                 type="radio"
// // // // // // // // // // // //                 name="registrationType"
// // // // // // // // // // // //                 value={type}
// // // // // // // // // // // //                 checked={formData.registrationType === type}
// // // // // // // // // // // //                 onChange={handleChange}
// // // // // // // // // // // //               />{" "}
// // // // // // // // // // // //               {type === "withAccommodation"
// // // // // // // // // // // //                 ? "Registration + Accommodation"
// // // // // // // // // // // //                 : type === "virtual"
// // // // // // // // // // // //                 ? "Virtual"
// // // // // // // // // // // //                 : "Registration Only"}
// // // // // // // // // // // //             </label>
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* PRESENTATION TYPE */}
// // // // // // // // // // // //         <div className="bg-white p-6 rounded-xl shadow space-y-3">
// // // // // // // // // // // //           <p className="font-semibold">Presentation Type *</p>
// // // // // // // // // // // //           {["Speaker", "Poster", "Listener", "Delegate", "Student"].map((p) => (
// // // // // // // // // // // //             <label key={p} className="mr-4">
// // // // // // // // // // // //               <input
// // // // // // // // // // // //                 type="radio"
// // // // // // // // // // // //                 name="presentationType"
// // // // // // // // // // // //                 value={p}
// // // // // // // // // // // //                 checked={formData.presentationType === p}
// // // // // // // // // // // //                 onChange={handleChange}
// // // // // // // // // // // //               />{" "}
// // // // // // // // // // // //               {p}
// // // // // // // // // // // //             </label>
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* ACCOMMODATION */}
// // // // // // // // // // // //         {formData.registrationType === "withAccommodation" && (
// // // // // // // // // // // //           <div className="bg-blue-50 p-6 rounded-xl space-y-4">
// // // // // // // // // // // //             <p className="font-semibold">Accommodation Options</p>

// // // // // // // // // // // //             <select name="numberOfGuests" onChange={handleChange} className="border p-2 rounded w-full">
// // // // // // // // // // // //               <option value={0}>0 (Just Me)</option>
// // // // // // // // // // // //               <option value={1}>1 Guest</option>
// // // // // // // // // // // //               <option value={2}>2 Guests</option>
// // // // // // // // // // // //             </select>

// // // // // // // // // // // //             <select name="numberOfNights" onChange={handleChange} className="border p-2 rounded w-full">
// // // // // // // // // // // //               <option value={0}>0 Nights</option>
// // // // // // // // // // // //               <option value={1}>1 Night</option>
// // // // // // // // // // // //               <option value={2}>2 Nights</option>
// // // // // // // // // // // //               <option value={3}>3 Nights</option>
// // // // // // // // // // // //             </select>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         )}

// // // // // // // // // // // //         {/* PRICING SUMMARY */}
// // // // // // // // // // // //         <div className="bg-white p-6 rounded-xl shadow">
// // // // // // // // // // // //           <p className="font-semibold mb-2">Pricing Summary</p>
// // // // // // // // // // // //           <p>Price: €{price}</p>
// // // // // // // // // // // //           <p className="text-sm text-gray-600">Plan ID: {formData.planId}</p>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* SUBMIT */}
// // // // // // // // // // // //         <button
// // // // // // // // // // // //           type="submit"
// // // // // // // // // // // //           disabled={loading}
// // // // // // // // // // // //           className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold"
// // // // // // // // // // // //         >
// // // // // // // // // // // //           {loading ? "Processing..." : "Register & Pay"}
// // // // // // // // // // // //         </button>
// // // // // // // // // // // //       </form>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default NEWRegister;
















// // // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // // import axios from "axios";
// // // // // // // // // // // import pricingData from "./pricing.json";

// // // // // // // // // // // /* ---------------- TYPES ---------------- */

// // // // // // // // // // // interface PricingItem {
// // // // // // // // // // //   planId: string;
// // // // // // // // // // //   registrationType: string;
// // // // // // // // // // //   presentationType: string;
// // // // // // // // // // //   nights: number;
// // // // // // // // // // //   price: number;
// // // // // // // // // // // }

// // // // // // // // // // // interface FormData {
// // // // // // // // // // //   planId: string;
// // // // // // // // // // //   conferenceCode: string;
// // // // // // // // // // //   title: string;
// // // // // // // // // // //   fullName: string;
// // // // // // // // // // //   email: string;
// // // // // // // // // // //   phone: string;
// // // // // // // // // // //   institute: string;
// // // // // // // // // // //   country: string;
// // // // // // // // // // //   registrationType: "registrationOnly" | "withAccommodation" | "virtual";
// // // // // // // // // // //   presentationType: string;
// // // // // // // // // // //   numberOfNights: number;
// // // // // // // // // // //   numberOfGuests: number;
// // // // // // // // // // // }

// // // // // // // // // // // /* ---------------- COMPONENT ---------------- */

// // // // // // // // // // // const NEWRegister: React.FC = () => {
// // // // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // // // //   const [price, setPrice] = useState<number>(0);

// // // // // // // // // // //   const [formData, setFormData] = useState<FormData>({
// // // // // // // // // // //     planId: "",
// // // // // // // // // // //     conferenceCode: "AI-ROBO-2026",
// // // // // // // // // // //     title: "",
// // // // // // // // // // //     fullName: "",
// // // // // // // // // // //     email: "",
// // // // // // // // // // //     phone: "",
// // // // // // // // // // //     institute: "",
// // // // // // // // // // //     country: "",
// // // // // // // // // // //     registrationType: "withAccommodation",
// // // // // // // // // // //     presentationType: "Poster",
// // // // // // // // // // //     numberOfNights: 0,
// // // // // // // // // // //     numberOfGuests: 0,
// // // // // // // // // // //   });

// // // // // // // // // // //   /* ---------------- HELPERS ---------------- */

// // // // // // // // // // //   const findPlan = () => {
// // // // // // // // // // //     const plans = pricingData.pricing as PricingItem[];

// // // // // // // // // // //     const match = plans.find(
// // // // // // // // // // //       (p) =>
// // // // // // // // // // //         p.registrationType === formData.registrationType &&
// // // // // // // // // // //         p.presentationType === formData.presentationType &&
// // // // // // // // // // //         p.nights === formData.numberOfNights
// // // // // // // // // // //     );

// // // // // // // // // // //     if (match) {
// // // // // // // // // // //       setFormData((prev) => ({ ...prev, planId: match.planId }));
// // // // // // // // // // //       setPrice(match.price);
// // // // // // // // // // //     } else {
// // // // // // // // // // //       setFormData((prev) => ({ ...prev, planId: "" }));
// // // // // // // // // // //       setPrice(0);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   /* ---------------- EFFECTS ---------------- */

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     findPlan();
// // // // // // // // // // //   }, [
// // // // // // // // // // //     formData.registrationType,
// // // // // // // // // // //     formData.presentationType,
// // // // // // // // // // //     formData.numberOfNights,
// // // // // // // // // // //   ]);

// // // // // // // // // // //   /* ---------------- HANDLERS ---------------- */

// // // // // // // // // // //   const handleChange = (
// // // // // // // // // // //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// // // // // // // // // // //   ) => {
// // // // // // // // // // //     const { name, value } = e.target;

// // // // // // // // // // //     setFormData((prev) => {
// // // // // // // // // // //       // 🔑 RESET nights & guests when registration type changes
// // // // // // // // // // //       if (name === "registrationType") {
// // // // // // // // // // //         return {
// // // // // // // // // // //           ...prev,
// // // // // // // // // // //           registrationType: value as FormData["registrationType"],
// // // // // // // // // // //           numberOfNights: 0,
// // // // // // // // // // //           numberOfGuests: 0,
// // // // // // // // // // //         };
// // // // // // // // // // //       }

// // // // // // // // // // //       return {
// // // // // // // // // // //         ...prev,
// // // // // // // // // // //         [name]:
// // // // // // // // // // //           name === "numberOfNights" || name === "numberOfGuests"
// // // // // // // // // // //             ? Number(value)
// // // // // // // // // // //             : value,
// // // // // // // // // // //       };
// // // // // // // // // // //     });
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // // // // // // //     e.preventDefault();

// // // // // // // // // // //     if (!formData.planId) {
// // // // // // // // // // //       alert("No valid plan found");
// // // // // // // // // // //       return;
// // // // // // // // // // //     }

// // // // // // // // // // //     setLoading(true);
// // // // // // // // // // //     try {
// // // // // // // // // // //       const res = await axios.post(
// // // // // // // // // // //         "http://localhost:8080/api/registration/create",
// // // // // // // // // // //         formData
// // // // // // // // // // //       );
// // // // // // // // // // //       window.location.href = res.data.checkoutUrl;
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       alert("Registration failed");
// // // // // // // // // // //     } finally {
// // // // // // // // // // //       setLoading(false);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   /* ---------------- UI ---------------- */

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="max-w-4xl mx-auto p-6">
// // // // // // // // // // //       {/* HEADER */}
// // // // // // // // // // //       <div className="bg-white rounded-xl shadow p-6 mb-6 grid md:grid-cols-3 gap-4 text-sm">
// // // // // // // // // // //         <div>
// // // // // // // // // // //           <p className="font-semibold">Conference Date</p>
// // // // // // // // // // //           <p>May 29–31, 2026</p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <div>
// // // // // // // // // // //           <p className="font-semibold">Location</p>
// // // // // // // // // // //           <p>DoubleTree by Hilton Tokyo Ariake</p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <div>
// // // // // // // // // // //           <p className="font-semibold">Registration Deadline</p>
// // // // // // // // // // //           <p>March 30, 2026</p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       <form onSubmit={handleSubmit} className="space-y-6">
// // // // // // // // // // //         {/* BASIC DETAILS */}
// // // // // // // // // // //         <div className="bg-white p-6 rounded-xl shadow grid md:grid-cols-2 gap-4">
// // // // // // // // // // //           <select
// // // // // // // // // // //             name="title"
// // // // // // // // // // //             value={formData.title}
// // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // //             className="border p-2 rounded"
// // // // // // // // // // //           >
// // // // // // // // // // //             <option value="">Select Title (Optional)</option>
// // // // // // // // // // //             <option>Mr.</option>
// // // // // // // // // // //             <option>Ms.</option>
// // // // // // // // // // //             <option>Dr.</option>
// // // // // // // // // // //             <option>Prof.</option>
// // // // // // // // // // //           </select>

// // // // // // // // // // //           <input
// // // // // // // // // // //             name="fullName"
// // // // // // // // // // //             value={formData.fullName}
// // // // // // // // // // //             placeholder="Full Name *"
// // // // // // // // // // //             required
// // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // //             className="border p-2 rounded"
// // // // // // // // // // //           />

// // // // // // // // // // //           <input
// // // // // // // // // // //             name="phone"
// // // // // // // // // // //             value={formData.phone}
// // // // // // // // // // //             placeholder="Phone Number *"
// // // // // // // // // // //             required
// // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // //             className="border p-2 rounded"
// // // // // // // // // // //           />

// // // // // // // // // // //           <input
// // // // // // // // // // //             name="email"
// // // // // // // // // // //             value={formData.email}
// // // // // // // // // // //             type="email"
// // // // // // // // // // //             placeholder="Email Address *"
// // // // // // // // // // //             required
// // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // //             className="border p-2 rounded"
// // // // // // // // // // //           />

// // // // // // // // // // //           <input
// // // // // // // // // // //             name="institute"
// // // // // // // // // // //             value={formData.institute}
// // // // // // // // // // //             placeholder="Institute / Organization *"
// // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // //             className="border p-2 rounded"
// // // // // // // // // // //           />

// // // // // // // // // // //           <input
// // // // // // // // // // //             name="country"
// // // // // // // // // // //             value={formData.country}
// // // // // // // // // // //             placeholder="Country *"
// // // // // // // // // // //             onChange={handleChange}
// // // // // // // // // // //             className="border p-2 rounded"
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* REGISTRATION TYPE */}
// // // // // // // // // // //         <div className="bg-white p-6 rounded-xl shadow space-y-3">
// // // // // // // // // // //           <p className="font-semibold">Registration Type *</p>
// // // // // // // // // // //           {["registrationOnly", "withAccommodation", "virtual"].map((type) => (
// // // // // // // // // // //             <label key={type} className="block">
// // // // // // // // // // //               <input
// // // // // // // // // // //                 type="radio"
// // // // // // // // // // //                 name="registrationType"
// // // // // // // // // // //                 value={type}
// // // // // // // // // // //                 checked={formData.registrationType === type}
// // // // // // // // // // //                 onChange={handleChange}
// // // // // // // // // // //               />{" "}
// // // // // // // // // // //               {type === "withAccommodation"
// // // // // // // // // // //                 ? "Registration + Accommodation"
// // // // // // // // // // //                 : type === "virtual"
// // // // // // // // // // //                 ? "Virtual"
// // // // // // // // // // //                 : "Registration Only"}
// // // // // // // // // // //             </label>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* PRESENTATION TYPE */}
// // // // // // // // // // //         <div className="bg-white p-6 rounded-xl shadow space-y-3">
// // // // // // // // // // //           <p className="font-semibold">Presentation Type *</p>
// // // // // // // // // // //           {["Speaker", "Poster", "Listener", "Delegate", "Student"].map((p) => (
// // // // // // // // // // //             <label key={p} className="mr-4">
// // // // // // // // // // //               <input
// // // // // // // // // // //                 type="radio"
// // // // // // // // // // //                 name="presentationType"
// // // // // // // // // // //                 value={p}
// // // // // // // // // // //                 checked={formData.presentationType === p}
// // // // // // // // // // //                 onChange={handleChange}
// // // // // // // // // // //               />{" "}
// // // // // // // // // // //               {p}
// // // // // // // // // // //             </label>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* ACCOMMODATION */}
// // // // // // // // // // //         {formData.registrationType === "withAccommodation" && (
// // // // // // // // // // //           <div className="bg-blue-50 p-6 rounded-xl space-y-4">
// // // // // // // // // // //             <p className="font-semibold">Accommodation Options</p>

// // // // // // // // // // //             <select
// // // // // // // // // // //               name="numberOfGuests"
// // // // // // // // // // //               value={formData.numberOfGuests}
// // // // // // // // // // //               onChange={handleChange}
// // // // // // // // // // //               className="border p-2 rounded w-full"
// // // // // // // // // // //             >
// // // // // // // // // // //               <option value={0}>0 (Just Me)</option>
// // // // // // // // // // //               <option value={1}>1 Guest</option>
// // // // // // // // // // //               <option value={2}>2 Guests</option>
// // // // // // // // // // //             </select>

// // // // // // // // // // //             <select
// // // // // // // // // // //               name="numberOfNights"
// // // // // // // // // // //               value={formData.numberOfNights}
// // // // // // // // // // //               onChange={handleChange}
// // // // // // // // // // //               className="border p-2 rounded w-full"
// // // // // // // // // // //             >
// // // // // // // // // // //               <option value={0}>0 Nights</option>
// // // // // // // // // // //               <option value={1}>1 Night</option>
// // // // // // // // // // //               <option value={2}>2 Nights</option>
// // // // // // // // // // //               <option value={3}>3 Nights</option>
// // // // // // // // // // //             </select>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         )}

// // // // // // // // // // //         {/* PRICING SUMMARY */}
// // // // // // // // // // //         <div className="bg-white p-6 rounded-xl shadow">
// // // // // // // // // // //           <p className="font-semibold mb-2">Pricing Summary</p>
// // // // // // // // // // //           <p>Price: €{price}</p>
// // // // // // // // // // //           <p className="text-sm text-gray-600">
// // // // // // // // // // //             Plan ID: {formData.planId || "N/A"}
// // // // // // // // // // //           </p>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* SUBMIT */}
// // // // // // // // // // //         <button
// // // // // // // // // // //           type="submit"
// // // // // // // // // // //           disabled={loading || !formData.planId}
// // // // // // // // // // //           className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold disabled:bg-gray-400"
// // // // // // // // // // //         >
// // // // // // // // // // //           {loading ? "Processing..." : "Register & Pay"}
// // // // // // // // // // //         </button>
// // // // // // // // // // //       </form>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default NEWRegister;






// // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // import axios from "axios";
// // // // // // // // // // import pricingData from "./pricing.json";

// // // // // // // // // // /* ---------------- TYPES ---------------- */

// // // // // // // // // // interface PricingItem {
// // // // // // // // // //   planId: string;
// // // // // // // // // //   registrationType: string;
// // // // // // // // // //   presentationType: string;
// // // // // // // // // //   nights: number;
// // // // // // // // // //   price: number;
// // // // // // // // // // }

// // // // // // // // // // interface FormData {
// // // // // // // // // //   planId: string;
// // // // // // // // // //   conferenceCode: string;
// // // // // // // // // //   title: string;
// // // // // // // // // //   fullName: string;
// // // // // // // // // //   email: string;
// // // // // // // // // //   phone: string;
// // // // // // // // // //   institute: string;
// // // // // // // // // //   country: string;
// // // // // // // // // //   registrationType: "registrationOnly" | "withAccommodation" | "virtual";
// // // // // // // // // //   presentationType: string;
// // // // // // // // // //   numberOfNights: number;
// // // // // // // // // //   numberOfGuests: number;
// // // // // // // // // // }

// // // // // // // // // // /* ---------------- CAPTCHA HELPERS ---------------- */

// // // // // // // // // // const generateCaptcha = () => {
// // // // // // // // // //   const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
// // // // // // // // // //   let captcha = "";
// // // // // // // // // //   for (let i = 0; i < 6; i++) {
// // // // // // // // // //     captcha += chars.charAt(Math.floor(Math.random() * chars.length));
// // // // // // // // // //   }
// // // // // // // // // //   return captcha;
// // // // // // // // // // };

// // // // // // // // // // /* ---------------- COMPONENT ---------------- */

// // // // // // // // // // const NEWRegister: React.FC = () => {
// // // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // // //   const [price, setPrice] = useState<number>(0);

// // // // // // // // // //   // CAPTCHA
// // // // // // // // // //   const [captcha, setCaptcha] = useState(generateCaptcha());
// // // // // // // // // //   const [captchaInput, setCaptchaInput] = useState("");
// // // // // // // // // //   const isCaptchaValid = captchaInput === captcha;

// // // // // // // // // //   const [formData, setFormData] = useState<FormData>({
// // // // // // // // // //     planId: "",
// // // // // // // // // //     conferenceCode: "AI-ROBO-2026",
// // // // // // // // // //     title: "",
// // // // // // // // // //     fullName: "",
// // // // // // // // // //     email: "",
// // // // // // // // // //     phone: "",
// // // // // // // // // //     institute: "",
// // // // // // // // // //     country: "",
// // // // // // // // // //     registrationType: "withAccommodation",
// // // // // // // // // //     presentationType: "Poster",
// // // // // // // // // //     numberOfNights: 0,
// // // // // // // // // //     numberOfGuests: 0,
// // // // // // // // // //   });

// // // // // // // // // //   /* ---------------- PLAN LOGIC ---------------- */

// // // // // // // // // //   const findPlan = () => {
// // // // // // // // // //     const plans = pricingData.pricing as PricingItem[];

// // // // // // // // // //     const match = plans.find(
// // // // // // // // // //       (p) =>
// // // // // // // // // //         p.registrationType === formData.registrationType &&
// // // // // // // // // //         p.presentationType === formData.presentationType &&
// // // // // // // // // //         p.nights === formData.numberOfNights
// // // // // // // // // //     );

// // // // // // // // // //     if (match) {
// // // // // // // // // //       setFormData((prev) => ({ ...prev, planId: match.planId }));
// // // // // // // // // //       setPrice(match.price);
// // // // // // // // // //     } else {
// // // // // // // // // //       setFormData((prev) => ({ ...prev, planId: "" }));
// // // // // // // // // //       setPrice(0);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     findPlan();
// // // // // // // // // //   }, [
// // // // // // // // // //     formData.registrationType,
// // // // // // // // // //     formData.presentationType,
// // // // // // // // // //     formData.numberOfNights,
// // // // // // // // // //   ]);

// // // // // // // // // //   /* ---------------- HANDLERS ---------------- */

// // // // // // // // // //   const handleChange = (
// // // // // // // // // //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// // // // // // // // // //   ) => {
// // // // // // // // // //     const { name, value } = e.target;

// // // // // // // // // //     setFormData((prev) => {
// // // // // // // // // //       if (name === "registrationType") {
// // // // // // // // // //         return {
// // // // // // // // // //           ...prev,
// // // // // // // // // //           registrationType: value as FormData["registrationType"],
// // // // // // // // // //           numberOfNights: 0,
// // // // // // // // // //           numberOfGuests: 0,
// // // // // // // // // //         };
// // // // // // // // // //       }

// // // // // // // // // //       return {
// // // // // // // // // //         ...prev,
// // // // // // // // // //         [name]:
// // // // // // // // // //           name === "numberOfNights" || name === "numberOfGuests"
// // // // // // // // // //             ? Number(value)
// // // // // // // // // //             : value,
// // // // // // // // // //       };
// // // // // // // // // //     });
// // // // // // // // // //   };

// // // // // // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // // // // // //     e.preventDefault();

// // // // // // // // // //     if (!formData.planId) {
// // // // // // // // // //       alert("No valid plan found");
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     if (!isCaptchaValid) {
// // // // // // // // // //       alert("Invalid captcha");
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     setLoading(true);
// // // // // // // // // //     try {
// // // // // // // // // //       const res = await axios.post(
// // // // // // // // // //         "https://backendconf.roboticsaisummit.com/api/registration/create",
// // // // // // // // // //         formData
// // // // // // // // // //       );
// // // // // // // // // //       window.location.href = res.data.checkoutUrl;
// // // // // // // // // //     } catch {
// // // // // // // // // //       alert("Registration failed");
// // // // // // // // // //     } finally {
// // // // // // // // // //       setLoading(false);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   /* ---------------- UI ---------------- */

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="max-w-4xl mx-auto p-6 space-y-6">
// // // // // // // // // //       {/* HEADER */}
// // // // // // // // // //       <div className="bg-white rounded-xl shadow p-6 grid md:grid-cols-3 gap-4 text-sm">
// // // // // // // // // //         <div>
// // // // // // // // // //           <p className="font-semibold">Conference Date</p>
// // // // // // // // // //           <p>May 29–31, 2026</p>
// // // // // // // // // //         </div>
// // // // // // // // // //         <div>
// // // // // // // // // //           <p className="font-semibold">Location</p>
// // // // // // // // // //           <p>DoubleTree by Hilton Tokyo Ariake</p>
// // // // // // // // // //         </div>
// // // // // // // // // //         <div>
// // // // // // // // // //           <p className="font-semibold">Registration Deadline</p>
// // // // // // // // // //           <p>March 30, 2026</p>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       <form onSubmit={handleSubmit} className="space-y-6">
// // // // // // // // // //         {/* BASIC DETAILS */}
// // // // // // // // // //         <section className="bg-white p-6 rounded-xl shadow">
// // // // // // // // // //           <h3 className="font-semibold mb-4">Personal Information</h3>
// // // // // // // // // //           <div className="grid md:grid-cols-2 gap-4">
// // // // // // // // // //             <select name="title" value={formData.title} onChange={handleChange} className="border p-2 rounded">
// // // // // // // // // //               <option value="">Select Title</option>
// // // // // // // // // //               <option>Mr.</option>
// // // // // // // // // //               <option>Ms.</option>
// // // // // // // // // //               <option>Dr.</option>
// // // // // // // // // //               <option>Prof.</option>
// // // // // // // // // //             </select>
// // // // // // // // // //             <input name="fullName" value={formData.fullName} placeholder="Full Name *" required onChange={handleChange} className="border p-2 rounded" />
// // // // // // // // // //             <input name="phone" value={formData.phone} placeholder="Phone *" required onChange={handleChange} className="border p-2 rounded" />
// // // // // // // // // //             <input name="email" value={formData.email} type="email" placeholder="Email *" required onChange={handleChange} className="border p-2 rounded" />
// // // // // // // // // //             <input name="institute" value={formData.institute} placeholder="Institute / Organization" onChange={handleChange} className="border p-2 rounded" />
// // // // // // // // // //             <input name="country" value={formData.country} placeholder="Country" onChange={handleChange} className="border p-2 rounded" />
// // // // // // // // // //           </div>
// // // // // // // // // //         </section>

// // // // // // // // // //         {/* REGISTRATION TYPE */}
// // // // // // // // // //         <section className="bg-white p-6 rounded-xl shadow">
// // // // // // // // // //           <h3 className="font-semibold mb-3">Registration Type</h3>
// // // // // // // // // //           {["registrationOnly", "withAccommodation", "virtual"].map((type) => (
// // // // // // // // // //             <label key={type} className="block">
// // // // // // // // // //               <input type="radio" name="registrationType" value={type} checked={formData.registrationType === type} onChange={handleChange} />{" "}
// // // // // // // // // //               {type === "withAccommodation" ? "Registration + Accommodation" : type === "virtual" ? "Virtual" : "Registration Only"}
// // // // // // // // // //             </label>
// // // // // // // // // //           ))}
// // // // // // // // // //         </section>

// // // // // // // // // //         {/* PRESENTATION TYPE */}
// // // // // // // // // //         <section className="bg-white p-6 rounded-xl shadow">
// // // // // // // // // //           <h3 className="font-semibold mb-3">Presentation Type</h3>
// // // // // // // // // //           {["Speaker", "Poster", "Listener", "Delegate", "Student"].map((p) => (
// // // // // // // // // //             <label key={p} className="mr-4">
// // // // // // // // // //               <input type="radio" name="presentationType" value={p} checked={formData.presentationType === p} onChange={handleChange} /> {p}
// // // // // // // // // //             </label>
// // // // // // // // // //           ))}
// // // // // // // // // //         </section>

// // // // // // // // // //         {/* ACCOMMODATION */}
// // // // // // // // // //         {formData.registrationType === "withAccommodation" && (
// // // // // // // // // //           <section className="bg-blue-50 p-6 rounded-xl">
// // // // // // // // // //             <h3 className="font-semibold mb-3">Accommodation Options</h3>
// // // // // // // // // //             <div className="grid md:grid-cols-2 gap-4">
// // // // // // // // // //               <select name="numberOfGuests" value={formData.numberOfGuests} onChange={handleChange} className="border p-2 rounded">
// // // // // // // // // //                 <option value={0}>0 Guests</option>
// // // // // // // // // //                 <option value={1}>1 Guest</option>
// // // // // // // // // //                 <option value={2}>2 Guests</option>
// // // // // // // // // //               </select>
// // // // // // // // // //               <select name="numberOfNights" value={formData.numberOfNights} onChange={handleChange} className="border p-2 rounded">
// // // // // // // // // //                 <option value={0}>0 Nights</option>
// // // // // // // // // //                 <option value={1}>1 Night</option>
// // // // // // // // // //                 <option value={2}>2 Nights</option>
// // // // // // // // // //                 <option value={3}>3 Nights</option>
// // // // // // // // // //               </select>
// // // // // // // // // //             </div>
// // // // // // // // // //           </section>
// // // // // // // // // //         )}

// // // // // // // // // //         {/* CAPTCHA */}
// // // // // // // // // //         <section className="bg-white p-6 rounded-xl shadow">
// // // // // // // // // //           <h3 className="font-semibold mb-3">Security Verification</h3>
// // // // // // // // // //           <div className="flex items-center gap-4 mb-3">
// // // // // // // // // //             <div className="bg-gray-900 text-white px-4 py-2 tracking-widest rounded font-mono text-lg">
// // // // // // // // // //               {captcha}
// // // // // // // // // //             </div>
// // // // // // // // // //             <button
// // // // // // // // // //               type="button"
// // // // // // // // // //               onClick={() => setCaptcha(generateCaptcha())}
// // // // // // // // // //               className="px-3 py-2 bg-gray-200 rounded"
// // // // // // // // // //             >
// // // // // // // // // //               ↻
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>
// // // // // // // // // //           <input
// // // // // // // // // //             value={captchaInput}
// // // // // // // // // //             onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
// // // // // // // // // //             placeholder="Enter captcha"
// // // // // // // // // //             className="border p-2 rounded w-full"
// // // // // // // // // //           />
// // // // // // // // // //         </section>

// // // // // // // // // //         {/* PRICING */}
// // // // // // // // // //         <section className="bg-white p-6 rounded-xl shadow">
// // // // // // // // // //           <h3 className="font-semibold mb-2">Pricing Summary</h3>
// // // // // // // // // //           <p className="text-lg font-bold">€{price}</p>
// // // // // // // // // //           <p className="text-sm text-gray-600">Plan ID: {formData.planId || "N/A"}</p>
// // // // // // // // // //         </section>

// // // // // // // // // //         {/* SUBMIT */}
// // // // // // // // // //         <button
// // // // // // // // // //           type="submit"
// // // // // // // // // //           disabled={loading || !formData.planId || !isCaptchaValid}
// // // // // // // // // //           className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold disabled:bg-gray-400"
// // // // // // // // // //         >
// // // // // // // // // //           {loading ? "Processing..." : "Register & Pay"}
// // // // // // // // // //         </button>
// // // // // // // // // //       </form>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default NEWRegister;







// // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // import axios from "axios";
// // // // // // // // // import { 
// // // // // // // // //   Calendar, 
// // // // // // // // //   MapPin, 
// // // // // // // // //   User, 
// // // // // // // // //   Mail, 
// // // // // // // // //   Phone, 
// // // // // // // // //   Building2, 
// // // // // // // // //   Globe, 
// // // // // // // // //   ArrowRight, 
// // // // // // // // //   Check, 
// // // // // // // // //   RefreshCw,
// // // // // // // // //   MonitorPlay,
// // // // // // // // //   Hotel,
// // // // // // // // //   Ticket,
// // // // // // // // //   AlertCircle
// // // // // // // // // } from "lucide-react";
// // // // // // // // // import pricingData from "./pricing.json";

// // // // // // // // // /* ---------------- TYPES ---------------- */

// // // // // // // // // interface PricingItem {
// // // // // // // // //   planId: string;
// // // // // // // // //   registrationType: string;
// // // // // // // // //   presentationType: string;
// // // // // // // // //   nights: number;
// // // // // // // // //   price: number;
// // // // // // // // // }

// // // // // // // // // interface FormData {
// // // // // // // // //   planId: string;
// // // // // // // // //   conferenceCode: string;
// // // // // // // // //   title: string;
// // // // // // // // //   fullName: string;
// // // // // // // // //   email: string;
// // // // // // // // //   phone: string;
// // // // // // // // //   institute: string;
// // // // // // // // //   country: string;
// // // // // // // // //   registrationType: "registrationOnly" | "withAccommodation" | "virtual";
// // // // // // // // //   presentationType: string;
// // // // // // // // //   numberOfNights: number;
// // // // // // // // //   numberOfGuests: number;
// // // // // // // // // }

// // // // // // // // // /* ---------------- CAPTCHA HELPERS ---------------- */

// // // // // // // // // const generateCaptcha = () => {
// // // // // // // // //   const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
// // // // // // // // //   let captcha = "";
// // // // // // // // //   for (let i = 0; i < 6; i++) {
// // // // // // // // //     captcha += chars.charAt(Math.floor(Math.random() * chars.length));
// // // // // // // // //   }
// // // // // // // // //   return captcha;
// // // // // // // // // };

// // // // // // // // // /* ---------------- COMPONENT ---------------- */

// // // // // // // // // const NEWRegister: React.FC = () => {
// // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // //   const [price, setPrice] = useState<number>(0);

// // // // // // // // //   // CAPTCHA
// // // // // // // // //   const [captcha, setCaptcha] = useState(generateCaptcha());
// // // // // // // // //   const [captchaInput, setCaptchaInput] = useState("");
// // // // // // // // //   const isCaptchaValid = captchaInput === captcha;

// // // // // // // // //   const [formData, setFormData] = useState<FormData>({
// // // // // // // // //     planId: "",
// // // // // // // // //     conferenceCode: "AI-ROBO-2026",
// // // // // // // // //     title: "",
// // // // // // // // //     fullName: "",
// // // // // // // // //     email: "",
// // // // // // // // //     phone: "",
// // // // // // // // //     institute: "",
// // // // // // // // //     country: "",
// // // // // // // // //     registrationType: "withAccommodation",
// // // // // // // // //     presentationType: "Poster",
// // // // // // // // //     numberOfNights: 0,
// // // // // // // // //     numberOfGuests: 0,
// // // // // // // // //   });

// // // // // // // // //   /* ---------------- PLAN LOGIC ---------------- */

// // // // // // // // //   const findPlan = () => {
// // // // // // // // //     // @ts-ignore
// // // // // // // // //     const plans = pricingData.pricing as PricingItem[];

// // // // // // // // //     const match = plans.find(
// // // // // // // // //       (p) =>
// // // // // // // // //         p.registrationType === formData.registrationType &&
// // // // // // // // //         p.presentationType === formData.presentationType &&
// // // // // // // // //         p.nights === formData.numberOfNights
// // // // // // // // //     );

// // // // // // // // //     if (match) {
// // // // // // // // //       setFormData((prev) => ({ ...prev, planId: match.planId }));
// // // // // // // // //       setPrice(match.price);
// // // // // // // // //     } else {
// // // // // // // // //       setFormData((prev) => ({ ...prev, planId: "" }));
// // // // // // // // //       setPrice(0);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     findPlan();
// // // // // // // // //     // eslint-disable-next-line react-hooks/exhaustive-deps
// // // // // // // // //   }, [
// // // // // // // // //     formData.registrationType,
// // // // // // // // //     formData.presentationType,
// // // // // // // // //     formData.numberOfNights,
// // // // // // // // //   ]);

// // // // // // // // //   /* ---------------- HANDLERS ---------------- */

// // // // // // // // //   const handleChange = (
// // // // // // // // //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// // // // // // // // //   ) => {
// // // // // // // // //     const { name, value } = e.target;
// // // // // // // // //     setFormData((prev) => {
// // // // // // // // //       if (name === "registrationType") {
// // // // // // // // //         return {
// // // // // // // // //           ...prev,
// // // // // // // // //           registrationType: value as FormData["registrationType"],
// // // // // // // // //           numberOfNights: 0,
// // // // // // // // //           numberOfGuests: 0,
// // // // // // // // //         };
// // // // // // // // //       }
// // // // // // // // //       return {
// // // // // // // // //         ...prev,
// // // // // // // // //         [name]:
// // // // // // // // //           name === "numberOfNights" || name === "numberOfGuests"
// // // // // // // // //             ? Number(value)
// // // // // // // // //             : value,
// // // // // // // // //       };
// // // // // // // // //     });
// // // // // // // // //   };

// // // // // // // // //   const handleRadioChange = (name: string, value: string) => {
// // // // // // // // //     setFormData((prev) => {
// // // // // // // // //         if (name === "registrationType") {
// // // // // // // // //           return {
// // // // // // // // //             ...prev,
// // // // // // // // //             registrationType: value as FormData["registrationType"],
// // // // // // // // //             numberOfNights: 0,
// // // // // // // // //             numberOfGuests: 0,
// // // // // // // // //           };
// // // // // // // // //         }
// // // // // // // // //         return { ...prev, [name]: value };
// // // // // // // // //     });
// // // // // // // // //   };

// // // // // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     if (!formData.planId) return alert("No valid plan found");
// // // // // // // // //     if (!isCaptchaValid) return alert("Invalid captcha");

// // // // // // // // //     setLoading(true);
// // // // // // // // //     try {
// // // // // // // // //       const res = await axios.post(
// // // // // // // // //         "https://backendconf.roboticsaisummit.com/api/registration/create",
// // // // // // // // //         formData
// // // // // // // // //       );
// // // // // // // // //       window.location.href = res.data.checkoutUrl;
// // // // // // // // //     } catch {
// // // // // // // // //       alert("Registration failed");
// // // // // // // // //     } finally {
// // // // // // // // //       setLoading(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   /* ---------------- UI HELPERS ---------------- */
  
// // // // // // // // //   const InputField = ({ icon: Icon, ...props }: any) => (
// // // // // // // // //     <div className="relative group">
// // // // // // // // //       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-600 transition-colors">
// // // // // // // // //         <Icon size={18} />
// // // // // // // // //       </div>
// // // // // // // // //       <input
// // // // // // // // //         {...props}
// // // // // // // // //         className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white"
// // // // // // // // //       />
// // // // // // // // //     </div>
// // // // // // // // //   );

// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 font-sans text-slate-800">
// // // // // // // // //       <div className="max-w-3xl mx-auto space-y-6">
        
// // // // // // // // //         {/* HEADER */}
// // // // // // // // //         <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center relative overflow-hidden">
// // // // // // // // //           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
// // // // // // // // //           <h1 className="text-3xl font-bold text-slate-900 mb-2">Registration</h1>
// // // // // // // // //           <p className="text-slate-500 mb-6">AI & Robotics Summit 2026</p>
          
// // // // // // // // //           <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-600">
// // // // // // // // //             <span className="flex items-center gap-1.5"><Calendar size={16} className="text-indigo-600"/> May 29–31, 2026</span>
// // // // // // // // //             <span className="hidden sm:inline text-slate-300">|</span>
// // // // // // // // //             <span className="flex items-center gap-1.5"><MapPin size={16} className="text-indigo-600"/> Tokyo Ariake</span>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         <form onSubmit={handleSubmit} className="space-y-6">
          
// // // // // // // // //           {/* SECTION 1: PERSONAL DETAILS */}
// // // // // // // // //           <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
// // // // // // // // //             <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
// // // // // // // // //               <User className="text-indigo-600" size={20}/>
// // // // // // // // //               Attendee Information
// // // // // // // // //             </h2>
            
// // // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// // // // // // // // //               <div className="md:col-span-1">
// // // // // // // // //                   <select 
// // // // // // // // //                     name="title" 
// // // // // // // // //                     value={formData.title} 
// // // // // // // // //                     onChange={handleChange} 
// // // // // // // // //                     className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-white text-slate-700"
// // // // // // // // //                   >
// // // // // // // // //                   <option value="">Title</option>
// // // // // // // // //                   <option>Mr.</option>
// // // // // // // // //                   <option>Ms.</option>
// // // // // // // // //                   <option>Dr.</option>
// // // // // // // // //                   <option>Prof.</option>
// // // // // // // // //                 </select>
// // // // // // // // //               </div>
// // // // // // // // //               <InputField icon={User} name="fullName" value={formData.fullName} placeholder="Full Name" required onChange={handleChange} />
// // // // // // // // //               <InputField icon={Mail} name="email" value={formData.email} type="email" placeholder="Email Address" required onChange={handleChange} />
// // // // // // // // //               <InputField icon={Phone} name="phone" value={formData.phone} placeholder="Phone Number" required onChange={handleChange} />
// // // // // // // // //               <InputField icon={Building2} name="institute" value={formData.institute} placeholder="Institute / Organization" onChange={handleChange} />
// // // // // // // // //               <InputField icon={Globe} name="country" value={formData.country} placeholder="Country" onChange={handleChange} />
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* SECTION 2: PLAN SELECTION */}
// // // // // // // // //           <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
// // // // // // // // //             <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
// // // // // // // // //               <Ticket className="text-indigo-600" size={20}/>
// // // // // // // // //               Select Package
// // // // // // // // //             </h2>

// // // // // // // // //             {/* Registration Type Cards */}
// // // // // // // // //             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
// // // // // // // // //                {[
// // // // // // // // //                   { id: "registrationOnly", label: "Registration Only", icon: Ticket },
// // // // // // // // //                   { id: "withAccommodation", label: "With Hotel", icon: Hotel },
// // // // // // // // //                   { id: "virtual", label: "Virtual", icon: MonitorPlay },
// // // // // // // // //                 ].map((type) => (
// // // // // // // // //                   <button
// // // // // // // // //                     key={type.id}
// // // // // // // // //                     type="button"
// // // // // // // // //                     onClick={() => handleRadioChange("registrationType", type.id)}
// // // // // // // // //                     className={`relative p-4 rounded-xl border-2 text-left transition-all duration-200 flex flex-col items-center justify-center gap-2 ${
// // // // // // // // //                       formData.registrationType === type.id
// // // // // // // // //                         ? "border-indigo-600 bg-indigo-50 text-indigo-900 shadow-sm"
// // // // // // // // //                         : "border-slate-100 hover:border-slate-300 text-slate-600 hover:bg-slate-50"
// // // // // // // // //                     }`}
// // // // // // // // //                   >
// // // // // // // // //                     <type.icon size={24} className={formData.registrationType === type.id ? "text-indigo-600" : "text-slate-400"}/>
// // // // // // // // //                     <span className="font-semibold text-sm">{type.label}</span>
// // // // // // // // //                     {formData.registrationType === type.id && (
// // // // // // // // //                       <div className="absolute top-2 right-2 text-indigo-600"><Check size={14} /></div>
// // // // // // // // //                     )}
// // // // // // // // //                   </button>
// // // // // // // // //                 ))}
// // // // // // // // //             </div>

// // // // // // // // //             {/* Accommodation Details (Conditional) */}
// // // // // // // // //             {formData.registrationType === "withAccommodation" && (
// // // // // // // // //                <div className="mb-8 p-5 bg-slate-50 rounded-xl border border-slate-200 animate-in fade-in slide-in-from-top-2">
// // // // // // // // //                   <h3 className="text-sm font-semibold text-slate-800 mb-3">Hotel Preferences</h3>
// // // // // // // // //                   <div className="grid grid-cols-2 gap-4">
// // // // // // // // //                     <div>
// // // // // // // // //                       <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Guests</label>
// // // // // // // // //                       <select name="numberOfGuests" value={formData.numberOfGuests} onChange={handleChange} className="mt-1 w-full p-2.5 border border-slate-300 rounded-lg focus:ring-indigo-500 outline-none">
// // // // // // // // //                         <option value={0}>0 Guests</option>
// // // // // // // // //                         <option value={1}>1 Guest</option>
// // // // // // // // //                         <option value={2}>2 Guests</option>
// // // // // // // // //                       </select>
// // // // // // // // //                     </div>
// // // // // // // // //                     <div>
// // // // // // // // //                       <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Nights</label>
// // // // // // // // //                       <select name="numberOfNights" value={formData.numberOfNights} onChange={handleChange} className="mt-1 w-full p-2.5 border border-slate-300 rounded-lg focus:ring-indigo-500 outline-none">
// // // // // // // // //                         <option value={0}>0 Nights</option>
// // // // // // // // //                         <option value={1}>1 Night</option>
// // // // // // // // //                         <option value={2}>2 Nights</option>
// // // // // // // // //                         <option value={3}>3 Nights</option>
// // // // // // // // //                       </select>
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>
// // // // // // // // //                </div>
// // // // // // // // //             )}

// // // // // // // // //             {/* Presentation Type Pills */}
// // // // // // // // //             <div className="space-y-3">
// // // // // // // // //               <h3 className="text-sm font-semibold text-slate-700">Participation Role</h3>
// // // // // // // // //               <div className="flex flex-wrap gap-3">
// // // // // // // // //                 {["Speaker", "Poster", "Listener", "Delegate", "Student"].map((p) => (
// // // // // // // // //                   <label
// // // // // // // // //                     key={p}
// // // // // // // // //                     className={`cursor-pointer px-4 py-2 rounded-full border text-sm font-medium transition-all ${
// // // // // // // // //                       formData.presentationType === p
// // // // // // // // //                         ? "bg-slate-800 text-white border-slate-800"
// // // // // // // // //                         : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
// // // // // // // // //                     }`}
// // // // // // // // //                   >
// // // // // // // // //                     <input
// // // // // // // // //                       type="radio"
// // // // // // // // //                       name="presentationType"
// // // // // // // // //                       value={p}
// // // // // // // // //                       checked={formData.presentationType === p}
// // // // // // // // //                       onChange={handleChange}
// // // // // // // // //                       className="hidden"
// // // // // // // // //                     />
// // // // // // // // //                     {p}
// // // // // // // // //                   </label>
// // // // // // // // //                 ))}
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* SECTION 3: CHECKOUT & SECURITY */}
// // // // // // // // //           <div className="bg-slate-900 rounded-2xl shadow-lg overflow-hidden text-white">
// // // // // // // // //             <div className="p-6 sm:p-8">
// // // // // // // // //               <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
// // // // // // // // //                 <AlertCircle className="text-indigo-400" size={20}/>
// // // // // // // // //                 Final Verification
// // // // // // // // //               </h2>

// // // // // // // // //               <div className="grid md:grid-cols-2 gap-8 items-start">
                
// // // // // // // // //                 {/* Security Left */}
// // // // // // // // //                 <div className="space-y-4">
// // // // // // // // //                    <p className="text-sm text-slate-400">Please enter the security code to proceed.</p>
// // // // // // // // //                    <div className="flex items-center gap-3">
// // // // // // // // //                       <div className="bg-slate-800 px-4 py-3 rounded-lg font-mono text-xl tracking-widest text-indigo-400 border border-slate-700 select-none">
// // // // // // // // //                         {captcha}
// // // // // // // // //                       </div>
// // // // // // // // //                       <button type="button" onClick={() => setCaptcha(generateCaptcha())} className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700">
// // // // // // // // //                         <RefreshCw size={18} className="text-slate-300" />
// // // // // // // // //                       </button>
// // // // // // // // //                    </div>
// // // // // // // // //                    <input
// // // // // // // // //                       value={captchaInput}
// // // // // // // // //                       onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
// // // // // // // // //                       placeholder="ENTER CODE"
// // // // // // // // //                       className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none uppercase tracking-wide"
// // // // // // // // //                     />
// // // // // // // // //                 </div>

// // // // // // // // //                 {/* Summary Right */}
// // // // // // // // //                 <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
// // // // // // // // //                   <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-700">
// // // // // // // // //                     <span className="text-slate-400 text-sm">Plan ID</span>
// // // // // // // // //                     <span className="font-mono text-xs bg-slate-700 px-2 py-1 rounded text-slate-300">{formData.planId || "N/A"}</span>
// // // // // // // // //                   </div>
                  
// // // // // // // // //                   <div className="flex justify-between items-end mb-6">
// // // // // // // // //                      <div>
// // // // // // // // //                        <p className="text-sm text-slate-400">Total Amount</p>
// // // // // // // // //                        {!formData.planId && <p className="text-xs text-red-400 mt-1">Selection unavailable</p>}
// // // // // // // // //                      </div>
// // // // // // // // //                      <div className="text-3xl font-bold text-white">€{price}</div>
// // // // // // // // //                   </div>

// // // // // // // // //                   <button
// // // // // // // // //                     type="submit"
// // // // // // // // //                     disabled={loading || !formData.planId || !isCaptchaValid}
// // // // // // // // //                     className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3.5 rounded-lg font-semibold shadow-lg shadow-indigo-900/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
// // // // // // // // //                   >
// // // // // // // // //                     {loading ? "Processing..." : (
// // // // // // // // //                       <>
// // // // // // // // //                         Confirm & Pay <ArrowRight size={18} />
// // // // // // // // //                       </>
// // // // // // // // //                     )}
// // // // // // // // //                   </button>
// // // // // // // // //                 </div>

// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //         </form>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default NEWRegister;











// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import axios from "axios";
// // // // // // // // import { 
// // // // // // // //   Calendar, 
// // // // // // // //   MapPin, 
// // // // // // // //   User, 
// // // // // // // //   Mail, 
// // // // // // // //   Phone, 
// // // // // // // //   Building2, 
// // // // // // // //   Globe, 
// // // // // // // //   ArrowRight, 
// // // // // // // //   Check, 
// // // // // // // //   RefreshCw,
// // // // // // // //   MonitorPlay,
// // // // // // // //   Hotel,
// // // // // // // //   Ticket,
// // // // // // // //   AlertCircle,
// // // // // // // //   Receipt
// // // // // // // // } from "lucide-react";
// // // // // // // // import pricingData from "./pricing.json";

// // // // // // // // /* ---------------- TYPES ---------------- */

// // // // // // // // interface PricingItem {
// // // // // // // //   planId: string;
// // // // // // // //   registrationType: string;
// // // // // // // //   presentationType: string;
// // // // // // // //   nights: number;
// // // // // // // //   price: number;
// // // // // // // // }

// // // // // // // // interface FormData {
// // // // // // // //   planId: string;
// // // // // // // //   conferenceCode: string;
// // // // // // // //   title: string;
// // // // // // // //   fullName: string;
// // // // // // // //   email: string;
// // // // // // // //   phone: string;
// // // // // // // //   institute: string;
// // // // // // // //   country: string;
// // // // // // // //   registrationType: "registrationOnly" | "withAccommodation" | "virtual";
// // // // // // // //   presentationType: string;
// // // // // // // //   numberOfNights: number;
// // // // // // // //   numberOfGuests: number;
// // // // // // // // }

// // // // // // // // /* ---------------- CAPTCHA HELPERS ---------------- */

// // // // // // // // const generateCaptcha = () => {
// // // // // // // //   const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
// // // // // // // //   let captcha = "";
// // // // // // // //   for (let i = 0; i < 6; i++) {
// // // // // // // //     captcha += chars.charAt(Math.floor(Math.random() * chars.length));
// // // // // // // //   }
// // // // // // // //   return captcha;
// // // // // // // // };

// // // // // // // // /* ---------------- COMPONENT ---------------- */

// // // // // // // // const NEWRegister: React.FC = () => {
// // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // //   const [price, setPrice] = useState<number>(0);

// // // // // // // //   // CAPTCHA
// // // // // // // //   const [captcha, setCaptcha] = useState(generateCaptcha());
// // // // // // // //   const [captchaInput, setCaptchaInput] = useState("");
// // // // // // // //   const isCaptchaValid = captchaInput === captcha;

// // // // // // // //   const [formData, setFormData] = useState<FormData>({
// // // // // // // //     planId: "",
// // // // // // // //     conferenceCode: "AI-ROBO-2026",
// // // // // // // //     title: "",
// // // // // // // //     fullName: "",
// // // // // // // //     email: "",
// // // // // // // //     phone: "",
// // // // // // // //     institute: "",
// // // // // // // //     country: "",
// // // // // // // //     registrationType: "withAccommodation",
// // // // // // // //     presentationType: "Poster",
// // // // // // // //     numberOfNights: 0,
// // // // // // // //     numberOfGuests: 0,
// // // // // // // //   });

// // // // // // // //   /* ---------------- PLAN LOGIC ---------------- */

// // // // // // // //   const findPlan = () => {
// // // // // // // //     // @ts-ignore
// // // // // // // //     const plans = pricingData.pricing as PricingItem[];

// // // // // // // //     const match = plans.find(
// // // // // // // //       (p) =>
// // // // // // // //         p.registrationType === formData.registrationType &&
// // // // // // // //         p.presentationType === formData.presentationType &&
// // // // // // // //         p.nights === formData.numberOfNights
// // // // // // // //     );

// // // // // // // //     if (match) {
// // // // // // // //       setFormData((prev) => ({ ...prev, planId: match.planId }));
// // // // // // // //       setPrice(match.price);
// // // // // // // //     } else {
// // // // // // // //       setFormData((prev) => ({ ...prev, planId: "" }));
// // // // // // // //       setPrice(0);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   useEffect(() => {
// // // // // // // //     findPlan();
// // // // // // // //     // eslint-disable-next-line react-hooks/exhaustive-deps
// // // // // // // //   }, [
// // // // // // // //     formData.registrationType,
// // // // // // // //     formData.presentationType,
// // // // // // // //     formData.numberOfNights,
// // // // // // // //   ]);

// // // // // // // //   // Derived Pricing State
// // // // // // // //   const processingFee = price * 0.05;
// // // // // // // //   const totalAmount = price + processingFee;

// // // // // // // //   /* ---------------- HANDLERS ---------------- */

// // // // // // // //   const handleChange = (
// // // // // // // //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// // // // // // // //   ) => {
// // // // // // // //     const { name, value } = e.target;
// // // // // // // //     setFormData((prev) => {
// // // // // // // //       if (name === "registrationType") {
// // // // // // // //         return {
// // // // // // // //           ...prev,
// // // // // // // //           registrationType: value as FormData["registrationType"],
// // // // // // // //           numberOfNights: 0,
// // // // // // // //           numberOfGuests: 0,
// // // // // // // //         };
// // // // // // // //       }
// // // // // // // //       return {
// // // // // // // //         ...prev,
// // // // // // // //         [name]:
// // // // // // // //           name === "numberOfNights" || name === "numberOfGuests"
// // // // // // // //             ? Number(value)
// // // // // // // //             : value,
// // // // // // // //       };
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   const handleRadioChange = (name: string, value: string) => {
// // // // // // // //     setFormData((prev) => {
// // // // // // // //         if (name === "registrationType") {
// // // // // // // //           return {
// // // // // // // //             ...prev,
// // // // // // // //             registrationType: value as FormData["registrationType"],
// // // // // // // //             numberOfNights: 0,
// // // // // // // //             numberOfGuests: 0,
// // // // // // // //           };
// // // // // // // //         }
// // // // // // // //         return { ...prev, [name]: value };
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     if (!formData.planId) return alert("No valid plan found");
// // // // // // // //     if (!isCaptchaValid) return alert("Invalid captcha");

// // // // // // // //     setLoading(true);
// // // // // // // //     try {
// // // // // // // //       const res = await axios.post(
// // // // // // // //         "https://backendconf.roboticsaisummit.com/api/registration/create",
// // // // // // // //         formData
// // // // // // // //       );
// // // // // // // //       window.location.href = res.data.checkoutUrl;
// // // // // // // //     } catch {
// // // // // // // //       alert("Registration failed");
// // // // // // // //     } finally {
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   /* ---------------- UI HELPERS ---------------- */
  
// // // // // // // //   const InputField = ({ icon: Icon, ...props }: any) => (
// // // // // // // //     <div className="relative group">
// // // // // // // //       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-600 transition-colors">
// // // // // // // //         <Icon size={18} />
// // // // // // // //       </div>
// // // // // // // //       <input
// // // // // // // //         {...props}
// // // // // // // //         className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white"
// // // // // // // //       />
// // // // // // // //     </div>
// // // // // // // //   );

// // // // // // // //   const getOrderDescription = () => {
// // // // // // // //     if (formData.registrationType === 'virtual') return 'Virtual Registration';
// // // // // // // //     let desc = `${formData.presentationType} Registration`;
// // // // // // // //     if (formData.registrationType === 'withAccommodation') {
// // // // // // // //        desc += ` + ${formData.numberOfNights} Nights Stay`;
// // // // // // // //     }
// // // // // // // //     return desc;
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 font-sans text-slate-800">
// // // // // // // //       <div className="max-w-3xl mx-auto space-y-6">
        
// // // // // // // //         {/* HEADER */}
// // // // // // // //         <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center relative overflow-hidden">
// // // // // // // //           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
// // // // // // // //           <h1 className="text-3xl font-bold text-slate-900 mb-2">Registration</h1>
// // // // // // // //           <p className="text-slate-500 mb-6">AI & Robotics Summit 2026</p>
          
// // // // // // // //           <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-600">
// // // // // // // //             <span className="flex items-center gap-1.5"><Calendar size={16} className="text-indigo-600"/>July 28–30, 2026</span>
// // // // // // // //             <span className="hidden sm:inline text-slate-300">|</span>
// // // // // // // //             <span className="flex items-center gap-1.5"><MapPin size={16} className="text-indigo-600"/>Crowne Plaza - St. Peter’s Rome, Italy</span>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         <form onSubmit={handleSubmit} className="space-y-6">
          
// // // // // // // //           {/* SECTION 1: PERSONAL DETAILS */}
// // // // // // // //           <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
// // // // // // // //             <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
// // // // // // // //               <User className="text-indigo-600" size={20}/>
// // // // // // // //               Attendee Information
// // // // // // // //             </h2>
            
// // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// // // // // // // //               <div className="md:col-span-1">
// // // // // // // //                   <select 
// // // // // // // //                     name="title" 
// // // // // // // //                     value={formData.title} 
// // // // // // // //                     onChange={handleChange} 
// // // // // // // //                     className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-white text-slate-700"
// // // // // // // //                   >
// // // // // // // //                   <option value="">Title</option>
// // // // // // // //                   <option>Mr.</option>
// // // // // // // //                   <option>Ms.</option>
// // // // // // // //                   <option>Dr.</option>
// // // // // // // //                   <option>Prof.</option>
// // // // // // // //                 </select>
// // // // // // // //               </div>
// // // // // // // //               <InputField icon={User} name="fullName" value={formData.fullName} placeholder="Full Name" required onChange={handleChange} />
// // // // // // // //               <InputField icon={Mail} name="email" value={formData.email} type="email" placeholder="Email Address" required onChange={handleChange} />
// // // // // // // //               <InputField icon={Phone} name="phone" value={formData.phone} placeholder="Phone Number" required onChange={handleChange} />
// // // // // // // //               <InputField icon={Building2} name="institute" value={formData.institute} placeholder="Institute / Organization" onChange={handleChange} />
// // // // // // // //               <InputField icon={Globe} name="country" value={formData.country} placeholder="Country" onChange={handleChange} />
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* SECTION 2: PLAN SELECTION */}
// // // // // // // //           <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
// // // // // // // //             <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
// // // // // // // //               <Ticket className="text-indigo-600" size={20}/>
// // // // // // // //               Select Package
// // // // // // // //             </h2>

// // // // // // // //             {/* Registration Type Cards */}
// // // // // // // //             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
// // // // // // // //                {[
// // // // // // // //                   { id: "registrationOnly", label: "Registration Only", icon: Ticket },
// // // // // // // //                   { id: "withAccommodation", label: "With Hotel", icon: Hotel },
// // // // // // // //                   { id: "virtual", label: "Virtual", icon: MonitorPlay },
// // // // // // // //                 ].map((type) => (
// // // // // // // //                   <button
// // // // // // // //                     key={type.id}
// // // // // // // //                     type="button"
// // // // // // // //                     onClick={() => handleRadioChange("registrationType", type.id)}
// // // // // // // //                     className={`relative p-4 rounded-xl border-2 text-left transition-all duration-200 flex flex-col items-center justify-center gap-2 ${
// // // // // // // //                       formData.registrationType === type.id
// // // // // // // //                         ? "border-indigo-600 bg-indigo-50 text-indigo-900 shadow-sm"
// // // // // // // //                         : "border-slate-100 hover:border-slate-300 text-slate-600 hover:bg-slate-50"
// // // // // // // //                     }`}
// // // // // // // //                   >
// // // // // // // //                     <type.icon size={24} className={formData.registrationType === type.id ? "text-indigo-600" : "text-slate-400"}/>
// // // // // // // //                     <span className="font-semibold text-sm">{type.label}</span>
// // // // // // // //                     {formData.registrationType === type.id && (
// // // // // // // //                       <div className="absolute top-2 right-2 text-indigo-600"><Check size={14} /></div>
// // // // // // // //                     )}
// // // // // // // //                   </button>
// // // // // // // //                 ))}
// // // // // // // //             </div>

// // // // // // // //             {/* Accommodation Details (Conditional) */}
// // // // // // // //             {formData.registrationType === "withAccommodation" && (
// // // // // // // //                <div className="mb-8 p-5 bg-slate-50 rounded-xl border border-slate-200 animate-in fade-in slide-in-from-top-2">
// // // // // // // //                   <h3 className="text-sm font-semibold text-slate-800 mb-3">Hotel Preferences</h3>
// // // // // // // //                   <div className="grid grid-cols-2 gap-4">
// // // // // // // //                     <div>
// // // // // // // //                       <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Guests</label>
// // // // // // // //                       <select name="numberOfGuests" value={formData.numberOfGuests} onChange={handleChange} className="mt-1 w-full p-2.5 border border-slate-300 rounded-lg focus:ring-indigo-500 outline-none">
// // // // // // // //                         <option value={0}>0 Guests</option>
// // // // // // // //                         <option value={1}>1 Guest</option>
// // // // // // // //                         <option value={2}>2 Guests</option>
// // // // // // // //                       </select>
// // // // // // // //                     </div>
// // // // // // // //                     <div>
// // // // // // // //                       <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Nights</label>
// // // // // // // //                       <select name="numberOfNights" value={formData.numberOfNights} onChange={handleChange} className="mt-1 w-full p-2.5 border border-slate-300 rounded-lg focus:ring-indigo-500 outline-none">
// // // // // // // //                         <option value={0}>0 Nights</option>
// // // // // // // //                         <option value={1}>1 Night</option>
// // // // // // // //                         <option value={2}>2 Nights</option>
// // // // // // // //                         <option value={3}>3 Nights</option>
// // // // // // // //                       </select>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                </div>
// // // // // // // //             )}

// // // // // // // //             {/* Presentation Type Pills */}
// // // // // // // //             <div className="space-y-3">
// // // // // // // //               <h3 className="text-sm font-semibold text-slate-700">Participation Role</h3>
// // // // // // // //               <div className="flex flex-wrap gap-3">
// // // // // // // //                 {["Speaker", "Poster", "Listener", "Delegate", "Student"].map((p) => (
// // // // // // // //                   <label
// // // // // // // //                     key={p}
// // // // // // // //                     className={`cursor-pointer px-4 py-2 rounded-full border text-sm font-medium transition-all ${
// // // // // // // //                       formData.presentationType === p
// // // // // // // //                         ? "bg-slate-800 text-white border-slate-800"
// // // // // // // //                         : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
// // // // // // // //                     }`}
// // // // // // // //                   >
// // // // // // // //                     <input
// // // // // // // //                       type="radio"
// // // // // // // //                       name="presentationType"
// // // // // // // //                       value={p}
// // // // // // // //                       checked={formData.presentationType === p}
// // // // // // // //                       onChange={handleChange}
// // // // // // // //                       className="hidden"
// // // // // // // //                     />
// // // // // // // //                     {p}
// // // // // // // //                   </label>
// // // // // // // //                 ))}
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* SECTION 3: PRICING SUMMARY */}
// // // // // // // //           <div>
// // // // // // // //             <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
// // // // // // // //               <Receipt className="text-indigo-600" size={20}/>
// // // // // // // //               Pricing Summary
// // // // // // // //             </h2>
// // // // // // // //             <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
// // // // // // // //                <h3 className="font-bold text-slate-900 mb-4">Order Details</h3>
               
// // // // // // // //                {/* Line Items */}
// // // // // // // //                <div className="space-y-3 text-sm text-slate-600">
// // // // // // // //                   <div className="flex justify-between items-center">
// // // // // // // //                     <span>{getOrderDescription()}</span>
// // // // // // // //                     <span className="font-semibold text-slate-900">€{price.toFixed(0)}</span>
// // // // // // // //                   </div>
                  
// // // // // // // //                   {/* Divider line like in image */}
// // // // // // // //                   <div className="border-t border-slate-100 my-2"></div>

// // // // // // // //                   <div className="flex justify-between items-center">
// // // // // // // //                     <span>Subtotal</span>
// // // // // // // //                     <span className="font-semibold text-slate-900">€{price.toFixed(0)}</span>
// // // // // // // //                   </div>

// // // // // // // //                   <div className="flex justify-between items-center">
// // // // // // // //                     <span>Processing Fee (5%)</span>
// // // // // // // //                     <span className="font-semibold text-slate-900">€{processingFee.toFixed(2)}</span>
// // // // // // // //                   </div>
// // // // // // // //                </div>

// // // // // // // //                {/* Total Divider */}
// // // // // // // //                <div className="border-t border-slate-200 my-4"></div>

// // // // // // // //                {/* Total Amount */}
// // // // // // // //                <div className="flex justify-between items-center text-lg">
// // // // // // // //                   <span className="font-bold text-slate-900">Total Amount</span>
// // // // // // // //                   <span className="font-bold text-emerald-600">€{totalAmount.toFixed(2)}</span>
// // // // // // // //                </div>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* SECTION 4: FINAL VERIFICATION */}
// // // // // // // //           <div className="bg-slate-900 rounded-2xl shadow-lg overflow-hidden text-white">
// // // // // // // //             <div className="p-6 sm:p-8">
// // // // // // // //               <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
// // // // // // // //                 <AlertCircle className="text-indigo-400" size={20}/>
// // // // // // // //                 Final Verification
// // // // // // // //               </h2>

// // // // // // // //               <div className="grid md:grid-cols-2 gap-8 items-start">
                
// // // // // // // //                 {/* Security Left */}
// // // // // // // //                 <div className="space-y-4">
// // // // // // // //                    <p className="text-sm text-slate-400">To prevent spam, please enter the security code below.</p>
// // // // // // // //                    <div className="flex items-center gap-3">
// // // // // // // //                       <div className="bg-slate-800 px-4 py-3 rounded-lg font-mono text-xl tracking-widest text-indigo-400 border border-slate-700 select-none">
// // // // // // // //                         {captcha}
// // // // // // // //                       </div>
// // // // // // // //                       <button type="button" onClick={() => setCaptcha(generateCaptcha())} className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700">
// // // // // // // //                         <RefreshCw size={18} className="text-slate-300" />
// // // // // // // //                       </button>
// // // // // // // //                    </div>
// // // // // // // //                    <input
// // // // // // // //                       value={captchaInput}
// // // // // // // //                       onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
// // // // // // // //                       placeholder="ENTER CODE"
// // // // // // // //                       className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none uppercase tracking-wide"
// // // // // // // //                     />
// // // // // // // //                 </div>

// // // // // // // //                 {/* Summary Right */}
// // // // // // // //                 <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 h-full flex flex-col justify-between">
// // // // // // // //                   <div className="mb-4">
// // // // // // // //                     <div className="flex justify-between text-sm text-slate-400 mb-2">
// // // // // // // //                       <span>Plan ID</span>
// // // // // // // //                       <span className="font-mono text-slate-200">{formData.planId || "N/A"}</span>
// // // // // // // //                     </div>
// // // // // // // //                     <div className="flex justify-between text-sm text-slate-400">
// // // // // // // //                       <span>Total Payable</span>
// // // // // // // //                       <span className="text-white font-semibold">€{totalAmount.toFixed(2)}</span>
// // // // // // // //                     </div>
// // // // // // // //                   </div>

// // // // // // // //                   <button
// // // // // // // //                     type="submit"
// // // // // // // //                     disabled={loading || !formData.planId || !isCaptchaValid}
// // // // // // // //                     className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3.5 rounded-lg font-semibold shadow-lg shadow-indigo-900/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
// // // // // // // //                   >
// // // // // // // //                     {loading ? "Processing..." : (
// // // // // // // //                       <>
// // // // // // // //                         Confirm & Pay <ArrowRight size={18} />
// // // // // // // //                       </>
// // // // // // // //                     )}
// // // // // // // //                   </button>
// // // // // // // //                 </div>

// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //         </form>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default NEWRegister;







// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import axios from "axios";
// // // // // // // import {
// // // // // // //   Calendar,
// // // // // // //   MapPin,
// // // // // // //   User,
// // // // // // //   Mail,
// // // // // // //   Phone,
// // // // // // //   Building2,
// // // // // // //   Globe,
// // // // // // //   Ticket,
// // // // // // //   Receipt,
// // // // // // //   AlertCircle,
// // // // // // //   RefreshCw,
// // // // // // //   ArrowRight,
// // // // // // // } from "lucide-react";
// // // // // // // import pricingData from "./pricing.json";

// // // // // // // /* ---------------- TYPES ---------------- */

// // // // // // // interface PricingItem {
// // // // // // //   planId: string;
// // // // // // //   registrationType: string;
// // // // // // //   presentationType: string;
// // // // // // //   nights: number;
// // // // // // //   price: number;
// // // // // // // }

// // // // // // // interface FormData {
// // // // // // //   planId: string;
// // // // // // //   conferenceCode: string;
// // // // // // //   title: string;
// // // // // // //   fullName: string;
// // // // // // //   email: string;
// // // // // // //   phone: string;
// // // // // // //   institute: string;
// // // // // // //   country: string;
// // // // // // //   registrationType: "registrationOnly" | "withAccommodation" | "virtual";
// // // // // // //   presentationType: string;
// // // // // // //   numberOfNights: number;
// // // // // // //   numberOfGuests: number;
// // // // // // // }

// // // // // // // /* ---------------- CAPTCHA ---------------- */

// // // // // // // const generateCaptcha = () => {
// // // // // // //   const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
// // // // // // //   let code = "";
// // // // // // //   for (let i = 0; i < 6; i++) {
// // // // // // //     code += chars[Math.floor(Math.random() * chars.length)];
// // // // // // //   }
// // // // // // //   return code;
// // // // // // // };

// // // // // // // /* ---------------- COMPONENT ---------------- */

// // // // // // // const NEWRegister = () => {
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const [price, setPrice] = useState(0);

// // // // // // //   const [captcha, setCaptcha] = useState(generateCaptcha());
// // // // // // //   const [captchaInput, setCaptchaInput] = useState("");

// // // // // // //   const [formData, setFormData] = useState<FormData>({
// // // // // // //     planId: "",
// // // // // // //     conferenceCode: "AI-ROBO-2026",
// // // // // // //     title: "",
// // // // // // //     fullName: "",
// // // // // // //     email: "",
// // // // // // //     phone: "",
// // // // // // //     institute: "",
// // // // // // //     country: "",
// // // // // // //     registrationType: "registrationOnly",
// // // // // // //     presentationType: "Poster",
// // // // // // //     numberOfNights: 0,
// // // // // // //     numberOfGuests: 0,
// // // // // // //   });

// // // // // // //   /* ---------------- PLAN LOGIC ---------------- */

// // // // // // //   useEffect(() => {
// // // // // // //     const plans = pricingData.pricing as PricingItem[];
// // // // // // //     const match = plans.find(
// // // // // // //       (p) =>
// // // // // // //         p.registrationType === formData.registrationType &&
// // // // // // //         p.presentationType === formData.presentationType &&
// // // // // // //         p.nights === formData.numberOfNights
// // // // // // //     );

// // // // // // //     if (match) {
// // // // // // //       setPrice(match.price);
// // // // // // //       setFormData((prev) => ({ ...prev, planId: match.planId }));
// // // // // // //     } else {
// // // // // // //       setPrice(0);
// // // // // // //       setFormData((prev) => ({ ...prev, planId: "" }));
// // // // // // //     }
// // // // // // //   }, [
// // // // // // //     formData.registrationType,
// // // // // // //     formData.presentationType,
// // // // // // //     formData.numberOfNights,
// // // // // // //   ]);

// // // // // // //   const processingFee = price * 0.05;
// // // // // // //   const totalAmount = price + processingFee;

// // // // // // //   /* ---------------- HANDLERS ---------------- */

// // // // // // //   const handleChange = (
// // // // // // //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// // // // // // //   ) => {
// // // // // // //     const { name, value } = e.target;
// // // // // // //     setFormData((prev) => ({
// // // // // // //       ...prev,
// // // // // // //       [name]:
// // // // // // //         name === "numberOfNights" || name === "numberOfGuests"
// // // // // // //           ? Number(value)
// // // // // // //           : value,
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // // //     e.preventDefault();
// // // // // // //     if (!formData.planId) return alert("Please select a valid plan");
// // // // // // //     if (captchaInput !== captcha) return alert("Invalid captcha");

// // // // // // //     setLoading(true);
// // // // // // //     try {
// // // // // // //       const res = await axios.post(
// // // // // // //         "https://backendconf.roboticsaisummit.com/api/registration/create",
// // // // // // //         formData
// // // // // // //       );
// // // // // // //       window.location.href = res.data.checkoutUrl;
// // // // // // //     } catch {
// // // // // // //       alert("Registration failed");
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   /* ---------------- UI ---------------- */

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-slate-50 py-10 px-4">
// // // // // // //       <div className="max-w-3xl mx-auto space-y-6">

// // // // // // //         {/* HEADER */}
// // // // // // //         <div className="bg-white border rounded-lg p-6 text-center">
// // // // // // //           <h1 className="text-2xl font-bold mb-2">Conference Registration</h1>
// // // // // // //           <p className="text-sm text-slate-600 mb-3">
// // // // // // //             AI & Robotics Summit 2026
// // // // // // //           </p>
// // // // // // //           <div className="flex justify-center gap-4 text-sm text-slate-600">
// // // // // // //             <span className="flex items-center gap-1">
// // // // // // //               <Calendar size={14} /> July 28–30, 2026
// // // // // // //             </span>
// // // // // // //             <span className="flex items-center gap-1">
// // // // // // //               <MapPin size={14} /> Rome, Italy
// // // // // // //             </span>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <form onSubmit={handleSubmit} className="space-y-6">

// // // // // // //           {/* PERSONAL DETAILS */}
// // // // // // //           <div className="bg-white border rounded-lg p-6">
// // // // // // //             <h2 className="font-semibold mb-4">Attendee Information</h2>

// // // // // // //             <div className="grid md:grid-cols-2 gap-4">
// // // // // // //               <select
// // // // // // //                 name="title"
// // // // // // //                 value={formData.title}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 className="border px-3 py-2 rounded"
// // // // // // //               >
// // // // // // //                 <option value="">Title</option>
// // // // // // //                 <option>Mr.</option>
// // // // // // //                 <option>Ms.</option>
// // // // // // //                 <option>Dr.</option>
// // // // // // //                 <option>Prof.</option>
// // // // // // //               </select>

// // // // // // //               <input name="fullName" placeholder="Full Name" required onChange={handleChange} className="border px-3 py-2 rounded" />
// // // // // // //               <input name="email" type="email" placeholder="Email" required onChange={handleChange} className="border px-3 py-2 rounded" />
// // // // // // //               <input name="phone" placeholder="Phone" required onChange={handleChange} className="border px-3 py-2 rounded" />
// // // // // // //               <input name="institute" placeholder="Institute" onChange={handleChange} className="border px-3 py-2 rounded" />
// // // // // // //               <input name="country" placeholder="Country" onChange={handleChange} className="border px-3 py-2 rounded" />
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* PLAN SELECTION */}
// // // // // // //           <div className="bg-white border rounded-lg p-6">
// // // // // // //             <h2 className="font-semibold mb-4 flex items-center gap-2">
// // // // // // //               <Ticket size={16} /> Registration Plan
// // // // // // //             </h2>

// // // // // // //             {["registrationOnly", "withAccommodation", "virtual"].map((type) => (
// // // // // // //               <label key={type} className="flex items-center gap-2 mb-2">
// // // // // // //                 <input
// // // // // // //                   type="radio"
// // // // // // //                   name="registrationType"
// // // // // // //                   value={type}
// // // // // // //                   checked={formData.registrationType === type}
// // // // // // //                   onChange={handleChange}
// // // // // // //                 />
// // // // // // //                 <span className="capitalize">{type.replace(/([A-Z])/g, " $1")}</span>
// // // // // // //               </label>
// // // // // // //             ))}

// // // // // // //             {formData.registrationType === "withAccommodation" && (
// // // // // // //               <div className="grid grid-cols-2 gap-4 mt-4">
// // // // // // //                 <select name="numberOfNights" onChange={handleChange} className="border px-3 py-2 rounded">
// // // // // // //                   <option value={0}>Nights</option>
// // // // // // //                   <option value={1}>1</option>
// // // // // // //                   <option value={2}>2</option>
// // // // // // //                   <option value={3}>3</option>
// // // // // // //                 </select>
// // // // // // //                 <select name="numberOfGuests" onChange={handleChange} className="border px-3 py-2 rounded">
// // // // // // //                   <option value={0}>Guests</option>
// // // // // // //                   <option value={1}>1</option>
// // // // // // //                   <option value={2}>2</option>
// // // // // // //                 </select>
// // // // // // //               </div>
// // // // // // //             )}

// // // // // // //             <select
// // // // // // //               name="presentationType"
// // // // // // //               value={formData.presentationType}
// // // // // // //               onChange={handleChange}
// // // // // // //               className="border px-3 py-2 rounded mt-4 w-full"
// // // // // // //             >
// // // // // // //               <option>Speaker</option>
// // // // // // //               <option>Poster</option>
// // // // // // //               <option>Listener</option>
// // // // // // //               <option>Delegate</option>
// // // // // // //               <option>Student</option>
// // // // // // //             </select>
// // // // // // //           </div>

// // // // // // //           {/* PRICE SUMMARY */}
// // // // // // //           <div className="bg-white border rounded-lg p-6">
// // // // // // //             <h2 className="font-semibold mb-3 flex items-center gap-2">
// // // // // // //               <Receipt size={16} /> Fee Summary
// // // // // // //             </h2>

// // // // // // //             <div className="text-sm space-y-2">
// // // // // // //               <div className="flex justify-between">
// // // // // // //                 <span>Registration Fee</span>
// // // // // // //                 <span>€{price.toFixed(0)}</span>
// // // // // // //               </div>
// // // // // // //               <div className="flex justify-between">
// // // // // // //                 <span>Processing Fee</span>
// // // // // // //                 <span>€{processingFee.toFixed(2)}</span>
// // // // // // //               </div>
// // // // // // //               <hr />
// // // // // // //               <div className="flex justify-between font-semibold">
// // // // // // //                 <span>Total</span>
// // // // // // //                 <span>€{totalAmount.toFixed(2)}</span>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* CAPTCHA */}
// // // // // // //           <div className="bg-white border rounded-lg p-6">
// // // // // // //             <h2 className="font-semibold mb-3 flex items-center gap-2">
// // // // // // //               <AlertCircle size={16} /> Verification
// // // // // // //             </h2>

// // // // // // //             <div className="flex items-center gap-3 mb-3">
// // // // // // //               <span className="font-mono text-lg tracking-widest">{captcha}</span>
// // // // // // //               <button type="button" onClick={() => setCaptcha(generateCaptcha())}>
// // // // // // //                 <RefreshCw size={16} />
// // // // // // //               </button>
// // // // // // //             </div>

// // // // // // //             <input
// // // // // // //               value={captchaInput}
// // // // // // //               onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
// // // // // // //               placeholder="Enter captcha"
// // // // // // //               className="border px-3 py-2 rounded w-full mb-4"
// // // // // // //             />

// // // // // // //             <button
// // // // // // //               type="submit"
// // // // // // //               disabled={loading}
// // // // // // //               className="w-full bg-slate-900 text-white py-3 rounded flex justify-center items-center gap-2"
// // // // // // //             >
// // // // // // //               {loading ? "Processing..." : <>Confirm & Pay <ArrowRight size={16} /></>}
// // // // // // //             </button>
// // // // // // //           </div>

// // // // // // //         </form>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default NEWRegister;





// // // // // // import { useEffect, useState } from "react";
// // // // // // import axios from "axios";
// // // // // // import {
// // // // // //   Calendar,
// // // // // //   MapPin,
// // // // // //   Ticket,
// // // // // //   Receipt,
// // // // // //   AlertCircle,
// // // // // //   RefreshCw,
// // // // // //   ArrowRight,
// // // // // // } from "lucide-react";
// // // // // // import pricingData from "./pricing.json";

// // // // // // /* ---------------- TYPES ---------------- */

// // // // // // interface PricingItem {
// // // // // //   planId: string;
// // // // // //   registrationType: string;
// // // // // //   presentationType: string;
// // // // // //   nights: number;
// // // // // //   price: number;
// // // // // // }

// // // // // // interface FormData {
// // // // // //   planId: string;
// // // // // //   conferenceCode: string;
// // // // // //   title: string;
// // // // // //   fullName: string;
// // // // // //   email: string;
// // // // // //   phone: string;
// // // // // //   institute: string;
// // // // // //   country: string;
// // // // // //   registrationType: "registrationOnly" | "withAccommodation" | "virtual";
// // // // // //   presentationType: string;
// // // // // //   numberOfNights: number;
// // // // // //   numberOfGuests: number;
// // // // // // }

// // // // // // /* ---------------- CAPTCHA ---------------- */

// // // // // // const generateCaptcha = () => {
// // // // // //   const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
// // // // // //   let code = "";
// // // // // //   for (let i = 0; i < 6; i++) {
// // // // // //     code += chars[Math.floor(Math.random() * chars.length)];
// // // // // //   }
// // // // // //   return code;
// // // // // // };

// // // // // // /* ---------------- COMPONENT ---------------- */

// // // // // // const NEWRegister = () => {
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [price, setPrice] = useState(0);

// // // // // //   const [captcha, setCaptcha] = useState(generateCaptcha());
// // // // // //   const [captchaInput, setCaptchaInput] = useState("");

// // // // // //   const [formData, setFormData] = useState<FormData>({
// // // // // //     planId: "",
// // // // // //     conferenceCode: "AI-ROBO-2026",
// // // // // //     title: "",
// // // // // //     fullName: "",
// // // // // //     email: "",
// // // // // //     phone: "",
// // // // // //     institute: "",
// // // // // //     country: "",
// // // // // //     registrationType: "registrationOnly",
// // // // // //     presentationType: "Poster",
// // // // // //     numberOfNights: 0,
// // // // // //     numberOfGuests: 0,
// // // // // //   });

// // // // // //   /* ---------------- PLAN LOGIC ---------------- */

// // // // // //   useEffect(() => {
// // // // // //     const plans = pricingData.pricing as PricingItem[];
// // // // // //     const match = plans.find(
// // // // // //       (p) =>
// // // // // //         p.registrationType === formData.registrationType &&
// // // // // //         p.presentationType === formData.presentationType &&
// // // // // //         p.nights === formData.numberOfNights
// // // // // //     );

// // // // // //     if (match) {
// // // // // //       setPrice(match.price);
// // // // // //       setFormData((prev) => ({ ...prev, planId: match.planId }));
// // // // // //     } else {
// // // // // //       setPrice(0);
// // // // // //       setFormData((prev) => ({ ...prev, planId: "" }));
// // // // // //     }
// // // // // //   }, [
// // // // // //     formData.registrationType,
// // // // // //     formData.presentationType,
// // // // // //     formData.numberOfNights,
// // // // // //   ]);

// // // // // //   const processingFee = price * 0.05;
// // // // // //   const totalAmount = price + processingFee;

// // // // // //   /* ---------------- HANDLERS ---------------- */

// // // // // //   const handleChange = (
// // // // // //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// // // // // //   ) => {
// // // // // //     const { name, value } = e.target;
// // // // // //     setFormData((prev) => ({
// // // // // //       ...prev,
// // // // // //       [name]:
// // // // // //         name === "numberOfNights" || name === "numberOfGuests"
// // // // // //           ? Number(value)
// // // // // //           : value,
// // // // // //     }));
// // // // // //   };

// // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // //     e.preventDefault();
// // // // // //     if (!formData.planId) return alert("Please select a valid plan");
// // // // // //     if (captchaInput !== captcha) return alert("Invalid captcha");

// // // // // //     setLoading(true);
// // // // // //     try {
// // // // // //       const res = await axios.post(
// // // // // //         "https://backendconf.roboticsaisummit.com/api/registration/create",
// // // // // //         formData
// // // // // //       );
// // // // // //       window.location.href = res.data.checkoutUrl;
// // // // // //     } catch {
// // // // // //       alert("Registration failed");
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   /* ---------------- UI ---------------- */

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-slate-50 py-10 px-4">
// // // // // //       <div className="max-w-3xl mx-auto space-y-6">

// // // // // //         {/* HEADER */}
// // // // // //         {/* <div className="bg-white border rounded-lg p-6 text-center">
// // // // // //           <h1 className="text-2xl font-bold mb-2" style={{ color: "#303b71" }}>
// // // // // //             Conference Registration
// // // // // //           </h1>
// // // // // //           <p className="text-sm text-slate-600 mb-3">
// // // // // //             AI & Robotics Summit 2026
// // // // // //           </p>
// // // // // //           <div className="flex justify-center gap-4 text-sm text-slate-600">
// // // // // //             <span className="flex items-center gap-1">
// // // // // //               <Calendar size={14} /> July 28–30, 2026
// // // // // //             </span>
// // // // // //             <span className="flex items-center gap-1">
// // // // // //               <MapPin size={14} /> Rome, Italy
// // // // // //             </span>
// // // // // //           </div>
// // // // // //         </div> */}


// // // // // //         {/* HEADER */}
// // // // // // <div className="bg-white rounded-xl p-8 shadow-sm">
// // // // // //   <h1 className="text-3xl font-bold text-center mb-2" style={{ color: "#303b71" }}>
// // // // // //     Conference Registration
// // // // // //   </h1>
// // // // // //   <p className="text-center text-slate-600 mb-6">
// // // // // //     AI & Robotics Summit 2026
// // // // // //   </p>

// // // // // //   {/* INFO STRIP */}
// // // // // //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 rounded-lg p-6 text-sm">
// // // // // //     <div>
// // // // // //       <p className="font-semibold text-slate-800">Conference Date</p>
// // // // // //       <p className="text-slate-600">July 28–30, 2026</p>
// // // // // //     </div>
// // // // // //     <div>
// // // // // //       <p className="font-semibold text-slate-800">Location</p>
// // // // // //       <p className="text-slate-600">Crowne Plaza, Rome, Italy</p>
// // // // // //     </div>
// // // // // //     <div>
// // // // // //       <p className="font-semibold text-slate-800">Registration Deadline</p>
// // // // // //       <p className="text-slate-600">March 10, 2026</p>
// // // // // //     </div>
// // // // // //   </div>
// // // // // // </div>


// // // // // //         <form onSubmit={handleSubmit} className="space-y-6">

// // // // // //           {/* BASIC DETAILS */}
// // // // // //           {/* <div className="bg-white border rounded-lg p-6">
// // // // // //             <h2 className="font-semibold mb-4" style={{ color: "#303b71" }}>
// // // // // //               Attendee Information
// // // // // //             </h2>

// // // // // //             <div className="grid md:grid-cols-2 gap-4">
// // // // // //               <input name="fullName" placeholder="Full Name" required onChange={handleChange} className="border px-3 py-2 rounded" />
// // // // // //               <input name="email" type="email" placeholder="Email" required onChange={handleChange} className="border px-3 py-2 rounded" />
// // // // // //               <input name="phone" placeholder="Phone" required onChange={handleChange} className="border px-3 py-2 rounded" />
// // // // // //               <input name="institute" placeholder="Institute" onChange={handleChange} className="border px-3 py-2 rounded" />
// // // // // //               <input name="country" placeholder="Country" onChange={handleChange} className="border px-3 py-2 rounded" />
// // // // // //             </div>
// // // // // //           </div> */}

// // // // // //           {/* ATTENDEE INFORMATION */}
// // // // // // <div className="bg-white rounded-xl p-8 shadow-sm">
// // // // // //   <h2 className="font-semibold text-lg mb-6" style={{ color: "#303b71" }}>
// // // // // //     Attendee Information
// // // // // //   </h2>

// // // // // //   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// // // // // //     {/* Title */}
// // // // // //     <div>
// // // // // //       <label className="block text-sm font-medium mb-1">Title *</label>
// // // // // //       <select
// // // // // //         name="title"
// // // // // //         onChange={handleChange}
// // // // // //         className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#303b71]"
// // // // // //       >
// // // // // //         <option value="">Select Title *</option>
// // // // // //         <option>Mr.</option>
// // // // // //         <option>Ms.</option>
// // // // // //         <option>Dr.</option>
// // // // // //         <option>Prof.</option>
// // // // // //       </select>
// // // // // //     </div>

// // // // // //     {/* Full Name */}
// // // // // //     <div>
// // // // // //       <label className="block text-sm font-medium mb-1">Full Name *</label>
// // // // // //       <input
// // // // // //         name="fullName"
// // // // // //         required
// // // // // //         placeholder="Enter your full name"
// // // // // //         onChange={handleChange}
// // // // // //         className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#303b71]"
// // // // // //       />
// // // // // //     </div>

// // // // // //     {/* Phone */}
// // // // // //     <div>
// // // // // //       <label className="block text-sm font-medium mb-1">Phone Number *</label>
// // // // // //       <input
// // // // // //         name="phone"
// // // // // //         required
// // // // // //         placeholder="Enter your phone number"
// // // // // //         onChange={handleChange}
// // // // // //         className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#303b71]"
// // // // // //       />
// // // // // //     </div>

// // // // // //     {/* Email */}
// // // // // //     <div>
// // // // // //       <label className="block text-sm font-medium mb-1">Email Address *</label>
// // // // // //       <input
// // // // // //         type="email"
// // // // // //         name="email"
// // // // // //         required
// // // // // //         placeholder="Enter your email address"
// // // // // //         onChange={handleChange}
// // // // // //         className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#303b71]"
// // // // // //       />
// // // // // //     </div>

// // // // // //     {/* Institute */}
// // // // // //     <div>
// // // // // //       <label className="block text-sm font-medium mb-1">
// // // // // //         Institute / Organization *
// // // // // //       </label>
// // // // // //       <input
// // // // // //         name="institute"
// // // // // //         placeholder="Enter your institute/organization"
// // // // // //         onChange={handleChange}
// // // // // //         className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#303b71]"
// // // // // //       />
// // // // // //     </div>

// // // // // //     {/* Country */}
// // // // // //     <div>
// // // // // //       <label className="block text-sm font-medium mb-1">Country *</label>
// // // // // //       <select
// // // // // //         name="country"
// // // // // //         onChange={handleChange}
// // // // // //         className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#303b71]"
// // // // // //       >
// // // // // //         <option value="">Select your country</option>
// // // // // //         <option>India</option>
// // // // // //         <option>Germany</option>
// // // // // //         <option>USA</option>
// // // // // //         <option>UK</option>
// // // // // //       </select>
// // // // // //     </div>

// // // // // //   </div>
// // // // // // </div>


// // // // // //           {/* PLAN */}
// // // // // //           <div className="bg-white border rounded-lg p-6">
// // // // // //             <h2 className="font-semibold mb-4 flex items-center gap-2" style={{ color: "#303b71" }}>
// // // // // //               <Ticket size={16} /> Registration Plan
// // // // // //             </h2>

// // // // // //             {["registrationOnly (In Person)", "withAccommodation", "registrationOnly (Virtual)"].map((type) => (
// // // // // //               <label key={type} className="flex items-center gap-2 mb-2">
// // // // // //                 <input
// // // // // //                   type="radio"
// // // // // //                   name="registrationType"
// // // // // //                   value={type}
// // // // // //                   checked={formData.registrationType === type}
// // // // // //                   onChange={handleChange}
// // // // // //                   className="accent-[#303b71]"
// // // // // //                 />
// // // // // //                 <span className="capitalize">{type.replace(/([A-Z])/g, " $1")}</span>
// // // // // //               </label>
// // // // // //             ))}



// // // // // //             {/* PRESENTATION TYPE (ALL 5 RADIO OPTIONS) */}
// // // // // //             <div className="mt-6">
// // // // // //               <h3 className="text-sm font-semibold mb-3" style={{ color: "#303b71" }}>
// // // // // //                 Participation Type
// // // // // //               </h3>

// // // // // //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
// // // // // //                 {["Speaker", "Poster", "Listener", "Delegate", "Student"].map((type) => (
// // // // // //                   <label
// // // // // //                     key={type}
// // // // // //                     className={`flex items-center gap-3 px-4 py-3 border rounded-md cursor-pointer ${
// // // // // //                       formData.presentationType === type
// // // // // //                         ? "border-[#303b71] bg-[#303b71]/10"
// // // // // //                         : "border-slate-300 hover:border-[#303b71]"
// // // // // //                     }`}
// // // // // //                   >
// // // // // //                     <input
// // // // // //                       type="radio"
// // // // // //                       name="presentationType"
// // // // // //                       value={type}
// // // // // //                       checked={formData.presentationType === type}
// // // // // //                       onChange={handleChange}
// // // // // //                       className="accent-[#303b71]"
// // // // // //                     />
// // // // // //                     <span
// // // // // //                       className={`font-medium ${
// // // // // //                         formData.presentationType === type
// // // // // //                           ? "text-[#303b71]"
// // // // // //                           : "text-slate-700"
// // // // // //                       }`}
// // // // // //                     >
// // // // // //                       {type}
// // // // // //                     </span>
// // // // // //                   </label>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //                       {formData.registrationType === "withAccommodation" && (
// // // // // //               <div className="grid grid-cols-2 gap-4 mt-4">
// // // // // //                 <select name="numberOfNights" onChange={handleChange} className="border px-3 py-2 rounded">
// // // // // //                   <option value={0}>Nights</option>
// // // // // //                   <option value={1}>1 Night</option>
// // // // // //                   <option value={2}>2 Nights</option>
// // // // // //                   <option value={3}>3 Nights</option>
// // // // // //                 </select>
// // // // // //                 <select name="numberOfGuests" onChange={handleChange} className="border px-3 py-2 rounded">
// // // // // //                   <option value={0}>Guests</option>
// // // // // //                   <option value={1}>1 Guest</option>
// // // // // //                   <option value={2}>2 Guests</option>
// // // // // //                 </select>
// // // // // //               </div>
// // // // // //             )}

// // // // // //           {/* SUMMARY */}
// // // // // //           <div className="bg-white border rounded-lg p-6">
// // // // // //             <h2 className="font-semibold mb-3 flex items-center gap-2" style={{ color: "#303b71" }}>
// // // // // //               <Receipt size={16} /> Fee Summary
// // // // // //             </h2>

// // // // // //             <div className="text-sm space-y-2">
// // // // // //               <div className="flex justify-between">
// // // // // //                 <span>Registration Fee</span>
// // // // // //                 <span>€{price.toFixed(0)}</span>
// // // // // //               </div>
// // // // // //               <div className="flex justify-between">
// // // // // //                 <span>Processing Fee (5%)</span>
// // // // // //                 <span>€{processingFee.toFixed(2)}</span>
// // // // // //               </div>
// // // // // //               <hr />
// // // // // //               <div className="flex justify-between font-semibold">
// // // // // //                 <span>Total Payable</span>
// // // // // //                 <span style={{ color: "#303b71" }}>
// // // // // //                   €{totalAmount.toFixed(2)}
// // // // // //                 </span>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* CAPTCHA */}
// // // // // //           <div className="bg-white border rounded-lg p-6">
// // // // // //             <h2 className="font-semibold mb-3 flex items-center gap-2" style={{ color: "#303b71" }}>
// // // // // //               <AlertCircle size={16} /> Verification
// // // // // //             </h2>

// // // // // //             <div className="flex items-center gap-3 mb-3">
// // // // // //               <span className="font-mono text-lg tracking-widest">{captcha}</span>
// // // // // //               <button type="button" onClick={() => setCaptcha(generateCaptcha())}>
// // // // // //                 <RefreshCw size={16} />
// // // // // //               </button>
// // // // // //             </div>

// // // // // //             <input
// // // // // //               value={captchaInput}
// // // // // //               onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
// // // // // //               placeholder="Enter captcha"
// // // // // //               className="border px-3 py-2 rounded w-full mb-4"
// // // // // //             />

// // // // // //             <button
// // // // // //               type="submit"
// // // // // //               disabled={loading}
// // // // // //               className="w-full py-3 rounded text-white flex justify-center items-center gap-2"
// // // // // //               style={{ backgroundColor: "#303b71" }}
// // // // // //             >
// // // // // //               {loading ? "Processing..." : <>Confirm & Pay <ArrowRight size={16} /></>}
// // // // // //             </button>
// // // // // //           </div>

// // // // // //         </form>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default NEWRegister;




// // // // // import { useEffect, useState } from "react";
// // // // // import axios from "axios";
// // // // // import {
// // // // //   Calendar,
// // // // //   MapPin,
// // // // //   Receipt,
// // // // //   AlertCircle,
// // // // //   RefreshCw,
// // // // //   ArrowRight,
// // // // // } from "lucide-react";
// // // // // import pricingData from "./pricing.json";

// // // // // /* ---------------- TYPES ---------------- */

// // // // // interface PricingItem {
// // // // //   planId: string;
// // // // //   registrationType: string;
// // // // //   presentationType: string;
// // // // //   nights: number;
// // // // //   price: number;
// // // // // }

// // // // // interface FormData {
// // // // //   planId: string;
// // // // //   conferenceCode: string;
// // // // //   title: string;
// // // // //   fullName: string;
// // // // //   email: string;
// // // // //   phone: string;
// // // // //   institute: string;
// // // // //   country: string;
// // // // //   registrationType: "registrationOnly" | "withAccommodation" | "virtual";
// // // // //   presentationType: string;
// // // // //   numberOfNights: number;
// // // // //   numberOfGuests: number;
// // // // // }

// // // // // /* ---------------- CAPTCHA ---------------- */

// // // // // const generateCaptcha = () => {
// // // // //   const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
// // // // //   let code = "";
// // // // //   for (let i = 0; i < 6; i++) {
// // // // //     code += chars[Math.floor(Math.random() * chars.length)];
// // // // //   }
// // // // //   return code;
// // // // // };

// // // // // /* ---------------- COMPONENT ---------------- */

// // // // // const NEWRegister = () => {
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [price, setPrice] = useState(0);

// // // // //   const [captcha, setCaptcha] = useState(generateCaptcha());
// // // // //   const [captchaInput, setCaptchaInput] = useState("");

// // // // //   const [formData, setFormData] = useState<FormData>({
// // // // //     planId: "",
// // // // //     conferenceCode: "AI-ROBO-2026",
// // // // //     title: "",
// // // // //     fullName: "",
// // // // //     email: "",
// // // // //     phone: "",
// // // // //     institute: "",
// // // // //     country: "",
// // // // //     registrationType: "registrationOnly",
// // // // //     presentationType: "Poster",
// // // // //     numberOfNights: 1,
// // // // //     numberOfGuests: 0,
// // // // //   });

// // // // //   /* ---------------- PLAN LOGIC ---------------- */

// // // // //   useEffect(() => {
// // // // //     const plans = pricingData.pricing as PricingItem[];
// // // // //     const match = plans.find(
// // // // //       (p) =>
// // // // //         p.registrationType === formData.registrationType &&
// // // // //         p.presentationType === formData.presentationType &&
// // // // //         p.nights === formData.numberOfNights
// // // // //     );

// // // // //     if (match) {
// // // // //       setPrice(match.price);
// // // // //       setFormData((prev) => ({ ...prev, planId: match.planId }));
// // // // //     } else {
// // // // //       setPrice(0);
// // // // //       setFormData((prev) => ({ ...prev, planId: "" }));
// // // // //     }
// // // // //   }, [
// // // // //     formData.registrationType,
// // // // //     formData.presentationType,
// // // // //     formData.numberOfNights,
// // // // //   ]);

// // // // //   const processingFee = price * 0.05;
// // // // //   const totalAmount = price + processingFee;

// // // // //   /* ---------------- HANDLERS ---------------- */

// // // // //   const handleChange = (
// // // // //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// // // // //   ) => {
// // // // //     const { name, value } = e.target;
// // // // //     setFormData((prev) => ({
// // // // //       ...prev,
// // // // //       [name]:
// // // // //         name === "numberOfGuests" || name === "numberOfNights"
// // // // //           ? Number(value)
// // // // //           : value,
// // // // //     }));
// // // // //   };

// // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // //     e.preventDefault();
// // // // //     if (!formData.planId) return alert("Please select a valid plan");
// // // // //     if (captchaInput !== captcha) return alert("Invalid captcha");

// // // // //     setLoading(true);
// // // // //     try {
// // // // //       const res = await axios.post(
// // // // //         "https://backendconf.roboticsaisummit.com/api/registration/create",
// // // // //         formData
// // // // //       );
// // // // //       window.location.href = res.data.checkoutUrl;
// // // // //     } catch {
// // // // //       alert("Registration failed");
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   /* ---------------- UI ---------------- */

// // // // //   return (
// // // // //     <div className="min-h-screen bg-slate-100 py-10 px-4">
// // // // //       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 space-y-8">

// // // // //         {/* HEADER */}
// // // // //         <div className="text-center">
// // // // //           <h1 className="text-3xl font-bold text-slate-900">
// // // // //             Conference Registration
// // // // //           </h1>
// // // // //           <p className="text-slate-600 mt-1">
// // // // //             AI & Robotics Summit 2026
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* INFO STRIP */}
// // // // //         <div className="grid md:grid-cols-3 gap-6 bg-slate-50 rounded-lg p-6 text-sm">
// // // // //           <div>
// // // // //             <p className="font-semibold">Conference Date</p>
// // // // //             <p>May 29–30, 2026</p>
// // // // //           </div>
// // // // //           <div>
// // // // //             <p className="font-semibold">Location</p>
// // // // //             <p>Crowne Plaza Berlin, Germany</p>
// // // // //           </div>
// // // // //           <div>
// // // // //             <p className="font-semibold">Registration Deadline</p>
// // // // //             <p>March 10, 2026</p>
// // // // //           </div>
// // // // //         </div>

// // // // //         <form onSubmit={handleSubmit} className="space-y-8">

// // // // //           {/* ATTENDEE INFO */}
// // // // //           <div>
// // // // //             <h2 className="font-semibold mb-4">Attendee Information</h2>
// // // // //             <div className="grid md:grid-cols-2 gap-6">
// // // // //               <select name="title" onChange={handleChange}
// // // // //                 className="border rounded-lg px-4 py-3">
// // // // //                 <option value="">Select Title *</option>
// // // // //                 <option>Mr.</option>
// // // // //                 <option>Ms.</option>
// // // // //                 <option>Dr.</option>
// // // // //                 <option>Prof.</option>
// // // // //               </select>

// // // // //               <input name="fullName" required placeholder="Full Name *"
// // // // //                 onChange={handleChange}
// // // // //                 className="border rounded-lg px-4 py-3" />

// // // // //               <input name="phone" required placeholder="Phone Number *"
// // // // //                 onChange={handleChange}
// // // // //                 className="border rounded-lg px-4 py-3" />

// // // // //               <input type="email" name="email" required placeholder="Email Address *"
// // // // //                 onChange={handleChange}
// // // // //                 className="border rounded-lg px-4 py-3" />

// // // // //               <input name="institute" placeholder="Institute / Organization *"
// // // // //                 onChange={handleChange}
// // // // //                 className="border rounded-lg px-4 py-3" />

// // // // //               <input name="country" placeholder="Country *"
// // // // //                 onChange={handleChange}
// // // // //                 className="border rounded-lg px-4 py-3" />
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* REGISTRATION TYPE */}
// // // // //           <div>
// // // // //             <p className="font-semibold mb-3">
// // // // //               Registration Type <span className="text-red-500">*</span>
// // // // //             </p>
// // // // //             <div className="flex gap-8">
// // // // //               <label className="flex items-center gap-2">
// // // // //                 <input type="radio" name="registrationType"
// // // // //                   value="registrationOnly"
// // // // //                   checked={formData.registrationType === "registrationOnly"}
// // // // //                   onChange={handleChange} />
// // // // //                 Registration Only
// // // // //               </label>

// // // // //               <label className="flex items-center gap-2">
// // // // //                 <input type="radio" name="registrationType"
// // // // //                   value="withAccommodation"
// // // // //                   checked={formData.registrationType === "withAccommodation"}
// // // // //                   onChange={handleChange} />
// // // // //                 Registration + Accommodation
// // // // //               </label>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* PRESENTATION TYPE */}
// // // // //           <div>
// // // // //             <p className="font-semibold mb-3">
// // // // //               Presentation Type <span className="text-red-500">*</span>
// // // // //             </p>
// // // // //             <div className="flex flex-wrap gap-8">
// // // // //               {["Speaker", "Poster", "Delegate", "Listener", "Student", "Exhibitor"].map(
// // // // //                 (type) => (
// // // // //                   <label key={type} className="flex items-center gap-2">
// // // // //                     <input type="radio" name="presentationType"
// // // // //                       value={type}
// // // // //                       checked={formData.presentationType === type}
// // // // //                       onChange={handleChange} />
// // // // //                     {type}
// // // // //                   </label>
// // // // //                 )
// // // // //               )}
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* ACCOMMODATION */}
// // // // //           {formData.registrationType === "withAccommodation" && (
// // // // //             <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-6">
// // // // //               <div className="flex gap-3 bg-blue-100 border border-blue-200 rounded-lg p-4">
// // // // //                 <AlertCircle size={18} className="text-blue-600 mt-0.5" />
// // // // //                 <div className="text-sm">
// // // // //                   <p className="font-semibold">
// // // // //                     Accommodation will be provided for you only.
// // // // //                   </p>
// // // // //                   <p>
// // // // //                     0 means only you, 1 or more means you plus that number of guests.
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div className="grid md:grid-cols-2 gap-6">
// // // // //                 <div>
// // // // //                   <label className="block text-sm mb-1">Number of Guests</label>
// // // // //                   <select name="numberOfGuests"
// // // // //                     value={formData.numberOfGuests}
// // // // //                     onChange={handleChange}
// // // // //                     className="border rounded-lg px-4 py-2 w-full">
// // // // //                     <option value={0}>0 (Just Me)</option>
// // // // //                     <option value={1}>1 Guest</option>
// // // // //                     <option value={2}>2 Guests</option>
// // // // //                   </select>
// // // // //                 </div>

// // // // //                 <div>
// // // // //                   <label className="block text-sm mb-1">Number of Nights</label>
// // // // //                   <select name="numberOfNights"
// // // // //                     value={formData.numberOfNights}
// // // // //                     onChange={handleChange}
// // // // //                     className="border rounded-lg px-4 py-2 w-full">
// // // // //                     <option value={1}>1</option>
// // // // //                     <option value={2}>2</option>
// // // // //                     <option value={3}>3</option>
// // // // //                   </select>
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div className="bg-white border border-blue-200 rounded-lg p-4 text-sm">
// // // // //                 <p className="font-semibold mb-1">Accommodation Details:</p>
// // // // //                 <ul className="list-disc list-inside space-y-1">
// // // // //                   <li>Conference Date: May 29–30, 2026</li>
// // // // //                   <li>Location: Crowne Plaza Berlin, Germany</li>
// // // // //                   <li>Registration Deadline: March 10, 2026</li>
// // // // //                   <li>
// // // // //                     Selected: {formData.numberOfGuests} guest(s) for{" "}
// // // // //                     {formData.numberOfNights} night(s)
// // // // //                   </li>
// // // // //                 </ul>
// // // // //               </div>
// // // // //             </div>
// // // // //           )}

// // // // //           {/* CAPTCHA */}
// // // // //           <div className="border rounded-lg p-6">
// // // // //             <p className="font-semibold mb-3">Security Verification</p>
// // // // //             <div className="flex items-center gap-3 mb-3">
// // // // //               <div className="bg-slate-800 text-white px-5 py-2 rounded font-mono tracking-widest">
// // // // //                 {captcha}
// // // // //               </div>
// // // // //               <button type="button" onClick={() => setCaptcha(generateCaptcha())}>
// // // // //                 <RefreshCw size={18} />
// // // // //               </button>
// // // // //             </div>
// // // // //             <input
// // // // //               value={captchaInput}
// // // // //               onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
// // // // //               placeholder="Enter the code shown above"
// // // // //               className="border rounded-lg px-4 py-2 w-full"
// // // // //             />
// // // // //           </div>

// // // // //           {/* PRICING SUMMARY */}
// // // // //           <div>
// // // // //             <h3 className="font-semibold mb-3">Pricing Summary</h3>
// // // // //             <div className="bg-slate-50 rounded-lg p-4 text-sm space-y-2">
// // // // //               <div className="flex justify-between">
// // // // //                 <span>{formData.presentationType} Registration</span>
// // // // //                 <span>€{price.toFixed(0)}</span>
// // // // //               </div>
// // // // //               <div className="flex justify-between">
// // // // //                 <span>Processing Fee (5%)</span>
// // // // //                 <span>€{processingFee.toFixed(2)}</span>
// // // // //               </div>
// // // // //               <div className="border-t pt-2 flex justify-between font-semibold">
// // // // //                 <span>Total Amount</span>
// // // // //                 <span className="text-green-600">
// // // // //                   €{totalAmount.toFixed(2)}
// // // // //                 </span>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* SUBMIT */}
// // // // //           <button
// // // // //             type="submit"
// // // // //             disabled={loading}
// // // // //             className="w-full bg-slate-900 text-white py-3 rounded-lg flex justify-center items-center gap-2"
// // // // //           >
// // // // //             {loading ? "Processing..." : <>Confirm & Pay <ArrowRight size={16} /></>}
// // // // //           </button>

// // // // //         </form>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default NEWRegister;




// // // // import { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import {
// // // //   AlertCircle,
// // // //   RefreshCw,
// // // //   ArrowRight,
// // // // } from "lucide-react";
// // // // import pricingData from "./pricing.json";

// // // // /* ---------------- TYPES ---------------- */

// // // // interface PricingItem {
// // // //   planId: string;
// // // //   registrationType: string;
// // // //   presentationType: string;
// // // //   nights: number;
// // // //   price: number;
// // // // }

// // // // interface FormData {
// // // //   planId: string;
// // // //   conferenceCode: string;
// // // //   title: string;
// // // //   fullName: string;
// // // //   email: string;
// // // //   phone: string;
// // // //   institute: string;
// // // //   country: string;
// // // //   registrationType: "registrationOnly" | "withAccommodation" | "virtual";
// // // //   presentationType: string;
// // // //   numberOfNights: number;
// // // //   numberOfGuests: number;
// // // // }

// // // // /* ---------------- CAPTCHA ---------------- */

// // // // const generateCaptcha = () => {
// // // //   const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
// // // //   let code = "";
// // // //   for (let i = 0; i < 6; i++) {
// // // //     code += chars[Math.floor(Math.random() * chars.length)];
// // // //   }
// // // //   return code;
// // // // };

// // // // /* ---------------- COMPONENT ---------------- */

// // // // const NEWRegister = () => {
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [price, setPrice] = useState(0);

// // // //   const [captcha, setCaptcha] = useState(generateCaptcha());
// // // //   const [captchaInput, setCaptchaInput] = useState("");

// // // //   const [formData, setFormData] = useState<FormData>({
// // // //     planId: "",
// // // //     conferenceCode: "AI-ROBO-2026",
// // // //     title: "",
// // // //     fullName: "",
// // // //     email: "",
// // // //     phone: "",
// // // //     institute: "",
// // // //     country: "",
// // // //     registrationType: "registrationOnly",
// // // //     presentationType: "Poster",
// // // //     numberOfNights: 1,
// // // //     numberOfGuests: 0,
// // // //   });

// // // //   /* ---------------- PLAN LOGIC ---------------- */

// // // //   useEffect(() => {
// // // //     const plans = pricingData.pricing as PricingItem[];
// // // //     const match = plans.find(
// // // //       (p) =>
// // // //         p.registrationType === formData.registrationType &&
// // // //         p.presentationType === formData.presentationType &&
// // // //         p.nights === formData.numberOfNights
// // // //     );

// // // //     if (match) {
// // // //       setPrice(match.price);
// // // //       setFormData((prev) => ({ ...prev, planId: match.planId }));
// // // //     } else {
// // // //       setPrice(0);
// // // //       setFormData((prev) => ({ ...prev, planId: "" }));
// // // //     }
// // // //   }, [
// // // //     formData.registrationType,
// // // //     formData.presentationType,
// // // //     formData.numberOfNights,
// // // //   ]);

// // // //   const processingFee = price * 0.05;
// // // //   const totalAmount = price + processingFee;

// // // //   /* ---------------- HANDLERS ---------------- */

// // // //   const handleChange = (
// // // //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// // // //   ) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData((prev) => ({
// // // //       ...prev,
// // // //       [name]:
// // // //         name === "numberOfGuests" || name === "numberOfNights"
// // // //           ? Number(value)
// // // //           : value,
// // // //     }));
// // // //   };

// // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // //     e.preventDefault();
// // // //     if (!formData.planId) return alert("Please select a valid plan");
// // // //     if (captchaInput !== captcha) return alert("Invalid captcha");

// // // //     setLoading(true);
// // // //     try {
// // // //       const res = await axios.post(
// // // //         "https://backendconf.roboticsaisummit.com/api/registration/create",
// // // //         formData
// // // //       );
// // // //       window.location.href = res.data.checkoutUrl;
// // // //     } catch {
// // // //       alert("Registration failed");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   /* ---------------- UI ---------------- */

// // // //   return (
// // // //     <div className="min-h-screen bg-slate-100 py-10 px-4">
// // // //       <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8 space-y-8">
        
// // // //         {/* HEADER */}
// // // //         <div className="text-center">
// // // //           <h1 className="text-3xl font-bold text-slate-900">
// // // //             Conference Registration
// // // //           </h1>
// // // //           <p className="text-slate-600 mt-1">AI & Robotics Summit 2026</p>
// // // //         </div>

// // // //         {/* INFO STRIP */}
// // // //         <div className="grid md:grid-cols-3 gap-6 bg-slate-50 rounded-lg p-6 text-base border border-slate-100">
// // // //           <div>
// // // //             <p className="font-semibold text-slate-900">Conference Date</p>
// // // //             <p className="text-slate-600">May 29–30, 2026</p>
// // // //           </div>
// // // //           <div>
// // // //             <p className="font-semibold text-slate-900">Location</p>
// // // //             <p className="text-slate-600">Crowne Plaza Berlin, Germany</p>
// // // //           </div>
// // // //           <div>
// // // //             <p className="font-semibold text-slate-900">Registration Deadline</p>
// // // //             <p className="text-slate-600">March 10, 2026</p>
// // // //           </div>
// // // //         </div>

// // // //         <form onSubmit={handleSubmit} className="space-y-8">
          
// // // //           {/* 1. ATTENDEE INFO */}
// // // //           <div>
// // // //             <h2 className="text-lg font-bold text-slate-800 mb-4">Attendee Information</h2>
// // // //             <div className="grid md:grid-cols-2 gap-6">
// // // //               <select
// // // //                 name="title"
// // // //                 onChange={handleChange}
// // // //                 className="border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
// // // //               >
// // // //                 <option value="">Select Title *</option>
// // // //                 <option>Mr.</option>
// // // //                 <option>Ms.</option>
// // // //                 <option>Dr.</option>
// // // //                 <option>Prof.</option>
// // // //               </select>

// // // //               <input
// // // //                 name="fullName"
// // // //                 required
// // // //                 placeholder="Full Name *"
// // // //                 onChange={handleChange}
// // // //                 className="border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
// // // //               />

// // // //               <input
// // // //                 name="phone"
// // // //                 required
// // // //                 placeholder="Phone Number *"
// // // //                 onChange={handleChange}
// // // //                 className="border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
// // // //               />

// // // //               <input
// // // //                 type="email"
// // // //                 name="email"
// // // //                 required
// // // //                 placeholder="Email Address *"
// // // //                 onChange={handleChange}
// // // //                 className="border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
// // // //               />

// // // //               <input
// // // //                 name="institute"
// // // //                 placeholder="Institute / Organization *"
// // // //                 onChange={handleChange}
// // // //                 className="border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
// // // //               />

// // // //               <input
// // // //                 name="country"
// // // //                 placeholder="Country *"
// // // //                 onChange={handleChange}
// // // //                 className="border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
// // // //               />
// // // //             </div>
// // // //           </div>

// // // //           {/* 2. REGISTRATION TYPE */}
// // // //           <div>
// // // //             <p className="font-bold text-slate-800 mb-3">
// // // //               Registration Type <span className="text-red-500">*</span>
// // // //             </p>
// // // //             <div className="flex gap-8">
// // // //               <label className="flex items-center gap-2 cursor-pointer">
// // // //                 <input
// // // //                   type="radio"
// // // //                   name="registrationType"
// // // //                   value="registrationOnly"
// // // //                   checked={formData.registrationType === "registrationOnly"}
// // // //                   onChange={handleChange}
// // // //                   className="w-4 h-4 text-blue-600"
// // // //                 />
// // // //                 <span className="text-slate-700">Registration (In Person)</span>
// // // //               </label>

// // // //               <label className="flex items-center gap-2 cursor-pointer">
// // // //                 <input
// // // //                   type="radio"
// // // //                   name="registrationType"
// // // //                   value="withAccommodation"
// // // //                   checked={formData.registrationType === "withAccommodation"}
// // // //                   onChange={handleChange}
// // // //                   className="w-4 h-4 text-blue-600"
// // // //                 />
// // // //                 <span className="text-slate-700">Registration + Accommodation</span>
// // // //               </label>

// // // //               <label className="flex items-center gap-2 cursor-pointer">
// // // //                 <input
// // // //                   type="radio"
// // // //                   name="registrationType"
// // // //                   value="virtual"
// // // //                   checked={formData.registrationType === "virtual"}
// // // //                   onChange={handleChange}
// // // //                   className="w-4 h-4 text-blue-600"
// // // //                 />
// // // //                 <span className="text-slate-700">Registration (Virtual)</span>
// // // //               </label>
// // // //             </div>
// // // //           </div>

// // // //           {/* 3. PRESENTATION TYPE */}
// // // //           <div>
// // // //             <p className="font-bold text-slate-800 mb-3">
// // // //               Presentation Type <span className="text-red-500">*</span>
// // // //             </p>
// // // //             <div className="flex flex-wrap gap-x-8 gap-y-3">
// // // //               {[
// // // //                 "Speaker",
// // // //                 "Poster",
// // // //                 "Delegate",
// // // //                 "Listener",
// // // //                 "Student",
// // // //                 "Exhibitor",
// // // //               ].map((type) => (
// // // //                 <label key={type} className="flex items-center gap-2 cursor-pointer">
// // // //                   <input
// // // //                     type="radio"
// // // //                     name="presentationType"
// // // //                     value={type}
// // // //                     checked={formData.presentationType === type}
// // // //                     onChange={handleChange}
// // // //                     className="w-4 h-4 text-blue-600"
// // // //                   />
// // // //                   <span className="text-slate-700">{type}</span>
// // // //                 </label>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* 4. ACCOMMODATION INPUTS */}
// // // //           {formData.registrationType === "withAccommodation" && (
// // // //             <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-6 animate-in fade-in slide-in-from-top-4">
// // // //               <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-lg p-4 text-blue-800">
// // // //                 <AlertCircle size={20} className="shrink-0" />
// // // //                 <div className="text-sm">
// // // //                   <p className="font-semibold">
// // // //                     Accommodation Note:
// // // //                   </p>
// // // //                   <p>
// // // //                     Select '0' guests if the room is for you only. Select '1' or more to add accompanying persons.
// // // //                   </p>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="grid md:grid-cols-2 gap-6">
// // // //                 <div>
// // // //                   <label className="block text-sm font-semibold text-slate-700 mb-2">
// // // //                     Number of Guests
// // // //                   </label>
// // // //                   <select
// // // //                     name="numberOfGuests"
// // // //                     value={formData.numberOfGuests}
// // // //                     onChange={handleChange}
// // // //                     className="border border-slate-300 rounded-lg px-4 py-2 w-full outline-none focus:border-blue-500"
// // // //                   >
// // // //                     <option value={0}>0 (Just Me)</option>
// // // //                     <option value={1}>1 Guest</option>
// // // //                     <option value={2}>2 Guests</option>
// // // //                   </select>
// // // //                 </div>

// // // //                 <div>
// // // //                   <label className="block text-sm font-semibold text-slate-700 mb-2">
// // // //                     Number of Nights
// // // //                   </label>
// // // //                   <select
// // // //                     name="numberOfNights"
// // // //                     value={formData.numberOfNights}
// // // //                     onChange={handleChange}
// // // //                     className="border border-slate-300 rounded-lg px-4 py-2 w-full outline-none focus:border-blue-500"
// // // //                   >
// // // //                     <option value={1}>1 Night</option>
// // // //                     <option value={2}>2 Nights</option>
// // // //                     <option value={3}>3 Nights</option>
// // // //                   </select>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           )}

// // // //           {/* 5. PRICING SUMMARY (UPDATED TO MATCH IMAGE) */}
// // // //           <div className="pt-4">
// // // //             <h3 className="text-xl font-bold text-slate-900 mb-4">Pricing Summary</h3>
            
// // // //             <div className="bg-white rounded-xl shadow-md border border-slate-100 p-6">
              
// // // //               {/* Order Details Header */}
// // // //               <h4 className="font-bold text-slate-900 mb-4">Order Details</h4>

// // // //               <div className="space-y-3 text-slate-700 text-lg">
// // // //                 {/* Registration Row */}
// // // //                 <div className="flex justify-between items-center">
// // // //                   <span className="font-medium">
// // // //                     {formData.presentationType.toUpperCase()} Registration
// // // //                   </span>
// // // //                   {/* Note: Logic splits depend on backend data. Using subtotal for display if split not available */}
// // // //                   <span className="font-bold text-slate-900">
// // // //                      {/* If you have split prices, render them here. Otherwise showing base price */}
// // // //                      €{price.toFixed(0)}
// // // //                   </span>
// // // //                 </div>

// // // //                 {/* Accommodation Row (Conditional) */}
// // // //                 {formData.registrationType === "withAccommodation" && (
// // // //                   <div className="flex justify-between items-center">
// // // //                     <span className="font-medium">
// // // //                       Accommodation ({formData.numberOfNights} night, {formData.numberOfGuests} guest)
// // // //                     </span>
// // // //                     <span className="font-bold text-slate-900">
// // // //                       Included
// // // //                     </span>
// // // //                   </div>
// // // //                 )}
// // // //               </div>

// // // //               {/* Divider */}
// // // //               <hr className="my-4 border-slate-200" />

// // // //               {/* Subtotal & Fees */}
// // // //               <div className="space-y-3 text-slate-600 text-base">
// // // //                 <div className="flex justify-between">
// // // //                   <span>Subtotal</span>
// // // //                   <span className="font-bold text-slate-800">€{price.toFixed(0)}</span>
// // // //                 </div>
// // // //                 <div className="flex justify-between">
// // // //                   <span>Processing Fee (5%)</span>
// // // //                   <span className="font-bold text-slate-800">€{processingFee.toFixed(2)}</span>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Divider */}
// // // //               <hr className="my-4 border-slate-200" />

// // // //               {/* Total Amount */}
// // // //               <div className="flex justify-between items-center">
// // // //                 <span className="text-xl font-bold text-slate-900">Total Amount</span>
// // // //                 <span className="text-2xl font-bold text-green-600">
// // // //                   €{totalAmount.toFixed(2)}
// // // //                 </span>
// // // //               </div>

// // // //               {/* Blue Info Box (Matches Image) */}
// // // //               {formData.registrationType === "withAccommodation" && (
// // // //                 <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
// // // //                   <p className="font-bold text-blue-900 mb-2">Accommodation Details:</p>
// // // //                   <ul className="list-disc list-inside text-blue-800 text-base space-y-1">
// // // //                     <li>
// // // //                       <span className="font-medium">Duration:</span> {formData.numberOfNights} night{formData.numberOfNights > 1 ? 's' : ''}
// // // //                     </li>
// // // //                     <li>
// // // //                       <span className="font-medium">Capacity:</span> {formData.numberOfGuests} guest{formData.numberOfGuests !== 1 ? 's' : ''}
// // // //                     </li>
// // // //                   </ul>
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           </div>

// // // //           {/* 6. CAPTCHA */}
// // // //           <div className="border border-slate-200 rounded-lg p-6 bg-slate-50">
// // // //             <p className="font-bold text-slate-800 mb-3">Security Verification</p>
// // // //             <div className="flex items-center gap-4 mb-4">
// // // //               <div className="bg-slate-800 text-white px-6 py-2 rounded-md font-mono text-lg tracking-widest shadow-sm select-none">
// // // //                 {captcha}
// // // //               </div>
// // // //               <button
// // // //                 type="button"
// // // //                 onClick={() => setCaptcha(generateCaptcha())}
// // // //                 className="p-2 hover:bg-slate-200 rounded-full transition-colors"
// // // //                 title="Refresh Captcha"
// // // //               >
// // // //                 <RefreshCw size={20} className="text-slate-600" />
// // // //               </button>
// // // //             </div>
// // // //             <input
// // // //               value={captchaInput}
// // // //               onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
// // // //               placeholder="Enter the code shown above"
// // // //               className="border border-slate-300 rounded-lg px-4 py-3 w-full outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all"
// // // //             />
// // // //           </div>

// // // //           {/* SUBMIT BUTTON */}
// // // //           <button
// // // //             type="submit"
// // // //             disabled={loading}
// // // //             className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex justify-center items-center gap-2 text-lg"
// // // //           >
// // // //             {loading ? (
// // // //               "Processing..."
// // // //             ) : (
// // // //               <>
// // // //                 Confirm & Pay <ArrowRight size={20} />
// // // //               </>
// // // //             )}
// // // //           </button>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default NEWRegister;




// // // import { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import {
// // //   AlertCircle,
// // //   RefreshCw,
// // //   ArrowRight,
// // // } from "lucide-react";
// // // import pricingData from "./pricing.json";

// // // /* ---------------- TYPES ---------------- */

// // // interface PricingItem {
// // //   planId: string;
// // //   registrationType: string;
// // //   presentationType: string;
// // //   nights: number;
// // //   price: number;
// // // }

// // // interface FormData {
// // //   planId: string;
// // //   conferenceCode: string;
// // //   title: string;
// // //   fullName: string;
// // //   email: string;
// // //   phone: string;
// // //   institute: string;
// // //   country: string;
// // //   registrationType: "registrationOnly" | "withAccommodation" | "virtual";
// // //   presentationType: string;
// // //   numberOfNights: number;
// // //   numberOfGuests: number;
// // // }

// // // /* ---------------- CAPTCHA ---------------- */

// // // const generateCaptcha = () => {
// // //   const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
// // //   let code = "";
// // //   for (let i = 0; i < 6; i++) {
// // //     code += chars[Math.floor(Math.random() * chars.length)];
// // //   }
// // //   return code;
// // // };

// // // /* ---------------- COMPONENT ---------------- */

// // // const NEWRegister = () => {
// // //   const [loading, setLoading] = useState(false);
// // //   const [price, setPrice] = useState(0);

// // //   const [captcha, setCaptcha] = useState(generateCaptcha());
// // //   const [captchaInput, setCaptchaInput] = useState("");

// // //   const [formData, setFormData] = useState<FormData>({
// // //     planId: "",
// // //     conferenceCode: "AI-ROBO-2026",
// // //     title: "",
// // //     fullName: "",
// // //     email: "",
// // //     phone: "",
// // //     institute: "",
// // //     country: "",
// // //     registrationType: "registrationOnly",
// // //     presentationType: "Poster",
// // //     numberOfNights: 1,
// // //     numberOfGuests: 0,
// // //   });

// // //   /* ---------------- PLAN LOGIC ---------------- */

// // //   useEffect(() => {
// // //     const plans = pricingData.pricing as PricingItem[];
// // //     const match = plans.find(
// // //       (p) =>
// // //         p.registrationType === formData.registrationType &&
// // //         p.presentationType === formData.presentationType &&
// // //         p.nights === formData.numberOfNights
// // //     );

// // //     if (match) {
// // //       setPrice(match.price);
// // //       setFormData((prev) => ({ ...prev, planId: match.planId }));
// // //     } else {
// // //       setPrice(0);
// // //       setFormData((prev) => ({ ...prev, planId: "" }));
// // //     }
// // //   }, [
// // //     formData.registrationType,
// // //     formData.presentationType,
// // //     formData.numberOfNights,
// // //   ]);

// // //   const processingFee = price * 0.05;
// // //   const totalAmount = price + processingFee;

// // //   /* ---------------- HANDLERS ---------------- */

// // //   const handleChange = (
// // //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// // //   ) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prev) => ({
// // //       ...prev,
// // //       [name]:
// // //         name === "numberOfGuests" || name === "numberOfNights"
// // //           ? Number(value)
// // //           : value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     if (!formData.planId) return alert("Please select a valid plan");
// // //     if (captchaInput !== captcha) return alert("Invalid captcha");

// // //     setLoading(true);
// // //     try {
// // //       const res = await axios.post(
// // //         "https://backendconf.roboticsaisummit.com/api/registration/create",
// // //         formData
// // //       );
// // //       window.location.href = res.data.checkoutUrl;
// // //     } catch {
// // //       alert("Registration failed");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   /* ---------------- UI ---------------- */

// // //   return (
// // //     <div className="min-h-screen bg-slate-100 py-10 px-4">
// // //       <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8 space-y-8">

// // //         {/* HEADER */}
// // //         <div className="text-center">
// // //           <h1 className="text-4xl font-bold text-slate-900">
// // //             Conference Registration
// // //           </h1>
// // //           <p className="text-base text-slate-600 mt-1">
// // //             AI & Robotics Summit 2026
// // //           </p>
// // //         </div>

// // //         {/* INFO STRIP */}
// // //         <div className="grid md:grid-cols-3 gap-6 bg-slate-50 rounded-lg p-6 text-sm border border-slate-100">
// // //           <div>
// // //             <p className="font-semibold text-sm text-slate-900">Conference Date</p>
// // //             <p className="text-slate-600 text-sm">May 29–30, 2026</p>
// // //           </div>
// // //           <div>
// // //             <p className="font-semibold text-sm text-slate-900">Location</p>
// // //             <p className="text-slate-600 text-sm">Crowne Plaza Berlin, Germany</p>
// // //           </div>
// // //           <div>
// // //             <p className="font-semibold text-sm text-slate-900">Registration Deadline</p>
// // //             <p className="text-slate-600 text-sm">March 10, 2026</p>
// // //           </div>
// // //         </div>

// // //         <form onSubmit={handleSubmit} className="space-y-8">

// // //           {/* 1. ATTENDEE INFO */}
// // //           <div>
// // //             <h2 className="text-xl font-bold text-slate-800 mb-4">
// // //               Attendee Information
// // //             </h2>
// // //             <div className="grid md:grid-cols-2 gap-6">
// // //               <select
// // //                 name="title"
// // //                 onChange={handleChange}
// // //                 className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
// // //               >
// // //                 <option value="">Select Title *</option>
// // //                 <option>Mr.</option>
// // //                 <option>Ms.</option>
// // //                 <option>Dr.</option>
// // //                 <option>Prof.</option>
// // //               </select>

// // //               <input
// // //                 name="fullName"
// // //                 required
// // //                 placeholder="Full Name *"
// // //                 onChange={handleChange}
// // //                 className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
// // //               />

// // //               <input
// // //                 name="phone"
// // //                 required
// // //                 placeholder="Phone Number *"
// // //                 onChange={handleChange}
// // //                 className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
// // //               />

// // //               <input
// // //                 type="email"
// // //                 name="email"
// // //                 required
// // //                 placeholder="Email Address *"
// // //                 onChange={handleChange}
// // //                 className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
// // //               />

// // //               <input
// // //                 name="institute"
// // //                 placeholder="Institute / Organization *"
// // //                 onChange={handleChange}
// // //                 className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
// // //               />

// // //               <input
// // //                 name="country"
// // //                 placeholder="Country *"
// // //                 onChange={handleChange}
// // //                 className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
// // //               />
// // //             </div>
// // //           </div>

// // //           {/* 2. REGISTRATION TYPE */}
// // //           <div>
// // //             <p className="font-bold text-base text-slate-800 mb-3">
// // //               Registration Type <span className="text-red-500">*</span>
// // //             </p>
// // //             <div className="flex gap-8">
// // //               {[
// // //                 ["registrationOnly", "Registration (In Person)"],
// // //                 ["withAccommodation", "Registration + Accommodation"],
// // //                 ["virtual", "Registration (Virtual)"],
// // //               ].map(([value, label]) => (
// // //                 <label key={value} className="flex items-center gap-2 cursor-pointer">
// // //                   <input
// // //                     type="radio"
// // //                     name="registrationType"
// // //                     value={value}
// // //                     checked={formData.registrationType === value}
// // //                     onChange={handleChange}
// // //                     className="w-4 h-4 text-blue-600"
// // //                   />
// // //                   <span className="text-sm text-slate-700">{label}</span>
// // //                 </label>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* 3. PRESENTATION TYPE */}
// // //           <div>
// // //             <p className="font-bold text-base text-slate-800 mb-3">
// // //               Presentation Type <span className="text-red-500">*</span>
// // //             </p>
// // //             <div className="flex flex-wrap gap-x-8 gap-y-3">
// // //               {["Speaker", "Poster", "Delegate", "Listener", "Student", "Exhibitor"].map((type) => (
// // //                 <label key={type} className="flex items-center gap-2 cursor-pointer">
// // //                   <input
// // //                     type="radio"
// // //                     name="presentationType"
// // //                     value={type}
// // //                     checked={formData.presentationType === type}
// // //                     onChange={handleChange}
// // //                     className="w-4 h-4 text-blue-600"
// // //                   />
// // //                   <span className="text-sm text-slate-700">{type}</span>
// // //                 </label>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* 4. ACCOMMODATION */}
// // //           {formData.registrationType === "withAccommodation" && (
// // //             <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-6">
// // //               <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-lg p-4 text-blue-800 text-sm">
// // //                 <AlertCircle size={18} />
// // //                 <p>
// // //                   Select <b>0 guests</b> if the room is for you only.
// // //                 </p>
// // //               </div>

// // //               <div className="grid md:grid-cols-2 gap-6">
// // //                 <select
// // //                   name="numberOfGuests"
// // //                   value={formData.numberOfGuests}
// // //                   onChange={handleChange}
// // //                   className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm"
// // //                 >
// // //                   <option value={0}>0 (Just Me)</option>
// // //                   <option value={1}>1 Guest</option>
// // //                   <option value={2}>2 Guests</option>
// // //                 </select>

// // //                 <select
// // //                   name="numberOfNights"
// // //                   value={formData.numberOfNights}
// // //                   onChange={handleChange}
// // //                   className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm"
// // //                 >
// // //                   <option value={1}>1 Night</option>
// // //                   <option value={2}>2 Nights</option>
// // //                   <option value={3}>3 Nights</option>
// // //                 </select>
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* 5. PRICING SUMMARY */}
// // //           <div>
// // //             <h3 className="text-xl font-bold text-slate-900 mb-4">
// // //               Pricing Summary
// // //             </h3>

// // //             <div className="border rounded-xl p-6 space-y-4 text-sm">
// // //               <div className="flex justify-between">
// // //                 <span>Subtotal</span>
// // //                 <span className="font-semibold">€{price}</span>
// // //               </div>
// // //               <div className="flex justify-between">
// // //                 <span>Processing Fee (5%)</span>
// // //                 <span className="font-semibold">€{processingFee.toFixed(2)}</span>
// // //               </div>
// // //               <hr />
// // //               <div className="flex justify-between text-lg font-bold">
// // //                 <span>Total</span>
// // //                 <span className="text-green-600">€{totalAmount.toFixed(2)}</span>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* 6. CAPTCHA */}
// // //           <div className="bg-slate-50 border rounded-lg p-6">
// // //             <p className="font-bold text-base mb-3">Security Verification</p>
// // //             <div className="flex items-center gap-4 mb-4">
// // //               <div className="bg-slate-800 text-white px-6 py-2 rounded-md font-mono text-base tracking-widest">
// // //                 {captcha}
// // //               </div>
// // //               <button type="button" onClick={() => setCaptcha(generateCaptcha())}>
// // //                 <RefreshCw size={18} />
// // //               </button>
// // //             </div>
// // //             <input
// // //               value={captchaInput}
// // //               onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
// // //               placeholder="Enter the code"
// // //               className="w-full border rounded-lg px-4 py-2.5 text-sm"
// // //             />
// // //           </div>

// // //           {/* SUBMIT */}
// // //           <button
// // //             type="submit"
// // //             disabled={loading}
// // //             className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl flex justify-center items-center gap-2 text-base"
// // //           >
// // //             {loading ? "Processing..." : <>Confirm & Pay <ArrowRight size={18} /></>}
// // //           </button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default NEWRegister;



// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import {
// //   AlertCircle,
// //   RefreshCw,
// //   ArrowRight,
// // } from "lucide-react";
// // import pricingData from "./pricing.json";

// // /* ---------------- TYPES ---------------- */

// // interface PricingItem {
// //   planId: string;
// //   registrationType: string;
// //   presentationType: string;
// //   nights: number;
// //   price: number;
// // }

// // interface FormData {
// //   planId: string;
// //   conferenceCode: string;
// //   title: string;
// //   fullName: string;
// //   email: string;
// //   phone: string;
// //   institute: string;
// //   country: string;
// //   registrationType: "registrationOnly" | "withAccommodation" | "virtual";
// //   presentationType: string;
// //   numberOfNights: number;
// //   numberOfGuests: number;
// // }

// // /* ---------------- CAPTCHA ---------------- */

// // const generateCaptcha = () => {
// //   const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
// //   let code = "";
// //   for (let i = 0; i < 6; i++) {
// //     code += chars[Math.floor(Math.random() * chars.length)];
// //   }
// //   return code;
// // };

// // /* ---------------- COMPONENT ---------------- */

// // const NEWRegister = () => {
// //   const [loading, setLoading] = useState(false);
// //   const [price, setPrice] = useState(0);

// //   const [captcha, setCaptcha] = useState(generateCaptcha());
// //   const [captchaInput, setCaptchaInput] = useState("");

// //   const [formData, setFormData] = useState<FormData>({
// //     planId: "",
// //     conferenceCode: "AI-ROBO-2026",
// //     title: "",
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     institute: "",
// //     country: "",
// //     registrationType: "registrationOnly",
// //     presentationType: "Poster",
// //     numberOfNights: 1,
// //     numberOfGuests: 0,
// //   });

// //   /* ---------------- PLAN LOGIC ---------------- */

// //   useEffect(() => {
// //     const plans = pricingData.pricing as PricingItem[];
// //     const match = plans.find(
// //       (p) =>
// //         p.registrationType === formData.registrationType &&
// //         p.presentationType === formData.presentationType &&
// //         p.nights === formData.numberOfNights
// //     );

// //     if (match) {
// //       setPrice(match.price);
// //       setFormData((prev) => ({ ...prev, planId: match.planId }));
// //     } else {
// //       setPrice(0);
// //       setFormData((prev) => ({ ...prev, planId: "" }));
// //     }
// //   }, [
// //     formData.registrationType,
// //     formData.presentationType,
// //     formData.numberOfNights,
// //   ]);

// //   const processingFee = price * 0.05;
// //   const totalAmount = price + processingFee;

// //   /* ---------------- HANDLERS ---------------- */

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// //   ) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]:
// //         name === "numberOfGuests" || name === "numberOfNights"
// //           ? Number(value)
// //           : value,
// //     }));
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!formData.planId) return alert("Please select a valid plan");
// //     if (captchaInput !== captcha) return alert("Invalid captcha");

// //     setLoading(true);
// //     try {
// //       const res = await axios.post(
// //         "https://backendconf.roboticsaisummit.com/api/registration/create",
// //         formData
// //       );
// //       window.location.href = res.data.checkoutUrl;
// //     } catch {
// //       alert("Registration failed");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   /* ---------------- UI ---------------- */

// //   return (
// //     <div className="min-h-screen bg-slate-100 py-10 px-4">
// //       <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8 space-y-8">

// //         {/* HEADER */}
// //         <div className="text-center">
// //           <h1 className="text-4xl font-bold text-slate-900">
// //             Conference Registration
// //           </h1>
// //           <p className="text-base text-slate-600 mt-1">
// //             AI & Robotics Summit 2026
// //           </p>
// //         </div>

// //         {/* INFO STRIP */}
// //         <div className="grid md:grid-cols-3 gap-6 bg-slate-50 rounded-lg p-6 text-sm border border-slate-100">
// //           <div>
// //             <p className="font-semibold text-sm text-slate-900">Conference Date</p>
// //             <p className="text-slate-600 text-sm">July 28–30, 2026</p>
// //           </div>
// //           <div>
// //             <p className="font-semibold text-sm text-slate-900">Location</p>
// //             <p className="text-slate-600 text-sm">Crowne Plaza - St. Peter’s Rome, Italy</p>
// //           </div>
// //           <div>
// //             <p className="font-semibold text-sm text-slate-900">Registration Deadline</p>
// //             <p className="text-slate-600 text-sm">July 10, 2026</p>
// //           </div>
// //         </div>

// //         <form onSubmit={handleSubmit} className="space-y-8">

// //           {/* 1. ATTENDEE INFO */}
// //           <div>
// //             <h2 className="text-xl font-bold text-slate-800 mb-4">
// //               Attendee Information
// //             </h2>
// //             <div className="grid md:grid-cols-2 gap-6">
// //               <select
// //                 name="title"
// //                 onChange={handleChange}
// //                 className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
// //               >
// //                 <option value="">Select Title *</option>
// //                 <option>Mr.</option>
// //                 <option>Ms.</option>
// //                 <option>Dr.</option>
// //                 <option>Prof.</option>
// //               </select>

// //               <input
// //                 name="fullName"
// //                 required
// //                 placeholder="Full Name *"
// //                 onChange={handleChange}
// //                 className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
// //               />

// //               <input
// //                 name="phone"
// //                 required
// //                 placeholder="Phone Number *"
// //                 onChange={handleChange}
// //                 className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
// //               />

// //               <input
// //                 type="email"
// //                 name="email"
// //                 required
// //                 placeholder="Email Address *"
// //                 onChange={handleChange}
// //                 className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
// //               />

// //               <input
// //                 name="institute"
// //                 placeholder="Institute / Organization *"
// //                 onChange={handleChange}
// //                 className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
// //               />

// //               <input
// //                 name="country"
// //                 placeholder="Country *"
// //                 onChange={handleChange}
// //                 className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
// //               />
// //             </div>
// //           </div>

// //           {/* 2. REGISTRATION TYPE */}
// //           <div>
// //             <p className="font-bold text-base text-slate-800 mb-3">
// //               Registration Type <span className="text-red-500">*</span>
// //             </p>
// //             <div className="flex gap-8">
// //               {[
// //                 ["registrationOnly", "Registration (In Person)"],
// //                 ["withAccommodation", "Registration + Accommodation"],
// //                 ["virtual", "Registration (Virtual)"],
// //               ].map(([value, label]) => (
// //                 <label key={value} className="flex items-center gap-2 cursor-pointer">
// //                   <input
// //                     type="radio"
// //                     name="registrationType"
// //                     value={value}
// //                     checked={formData.registrationType === value}
// //                     onChange={handleChange}
// //                     className="w-4 h-4 text-blue-600"
// //                   />
// //                   <span className="text-sm text-slate-700">{label}</span>
// //                 </label>
// //               ))}
// //             </div>
// //           </div>

// //           {/* 3. PRESENTATION TYPE */}
// //           <div>
// //             <p className="font-bold text-base text-slate-800 mb-3">
// //               Presentation Type <span className="text-red-500">*</span>
// //             </p>
// //             <div className="flex flex-wrap gap-x-8 gap-y-3">
// //               {["Speaker", "Poster", "Delegate", "Listener", "Student", "Exhibitor"].map((type) => (
// //                 <label key={type} className="flex items-center gap-2 cursor-pointer">
// //                   <input
// //                     type="radio"
// //                     name="presentationType"
// //                     value={type}
// //                     checked={formData.presentationType === type}
// //                     onChange={handleChange}
// //                     className="w-4 h-4 text-blue-600"
// //                   />
// //                   <span className="text-sm text-slate-700">{type}</span>
// //                 </label>
// //               ))}
// //             </div>
// //           </div>

// //           {/* 4. ACCOMMODATION INPUTS */}
// //           {formData.registrationType === "withAccommodation" && (
// //             <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-6">
// //               <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-lg p-4 text-blue-800 text-sm">
// //                 <AlertCircle size={18} />
// //                 <p>
// //                   Select <b>0 guests</b> if the room is for you only.
// //                 </p>
// //               </div>

// //               <div className="grid md:grid-cols-2 gap-6">
// //                 <select
// //                   name="numberOfGuests"
// //                   value={formData.numberOfGuests}
// //                   onChange={handleChange}
// //                   className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm"
// //                 >
// //                   <option value={0}>0 (Just Me)</option>
// //                   <option value={1}>1 Guest</option>
// //                   <option value={2}>2 Guests</option>
// //                 </select>

// //                 <select
// //                   name="numberOfNights"
// //                   value={formData.numberOfNights}
// //                   onChange={handleChange}
// //                   className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm"
// //                 >
// //                   <option value={1}>1 Night</option>
// //                   <option value={2}>2 Nights</option>
// //                   <option value={3}>3 Nights</option>
// //                 </select>
// //               </div>
// //             </div>
// //           )}

// //           {/* 5. PRICING SUMMARY (UPDATED SECTION) */}
// //           <div>
// //             <h3 className="text-xl font-bold text-slate-900 mb-4">
// //               Pricing Summary
// //             </h3>

// //             {/* Main Pricing Card */}
// //             <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
              
// //               {/* Card Body */}
// //               <div className="p-6">
// //                 <h4 className="font-bold text-slate-900 text-sm mb-4">Order Details</h4>

// //                 {/* Registration Line Item */}
// //                 <div className="flex justify-between items-center mb-3 text-sm text-slate-800">
// //                   <span className="font-medium">{formData.presentationType} Registration</span>
// //                   {/* Note: Assuming 'price' includes everything. If you have split pricing, separate it here */}
// //                   <span className="font-bold">
// //                     €{formData.registrationType === "withAccommodation" 
// //                         ? (price * 0.7).toFixed(0) // Dummy split for visuals, remove logic if not needed
// //                         : price}
// //                   </span>
// //                 </div>

// //                 {/* Accommodation Line Item */}
// //                 {formData.registrationType === "withAccommodation" && (
// //                   <div className="flex justify-between items-center mb-3 text-sm text-slate-800">
// //                     <span className="font-medium">
// //                       Accommodation ({formData.numberOfNights} night, {formData.numberOfGuests} guest)
// //                     </span>
// //                     <span className="font-bold">
// //                        €{(price * 0.3).toFixed(0)} {/* Dummy split for visuals */}
// //                     </span>
// //                   </div>
// //                 )}

// //                 <hr className="my-4 border-slate-200" />

// //                 {/* Subtotal */}
// //                 <div className="flex justify-between items-center mb-2 text-slate-500 text-sm">
// //                   <span>Subtotal</span>
// //                   <span className="font-bold text-slate-700">€{price}</span>
// //                 </div>

// //                 {/* Processing Fee */}
// //                 <div className="flex justify-between items-center mb-2 text-slate-500 text-sm">
// //                   <span>Processing Fee (5%)</span>
// //                   <span className="font-bold text-slate-700">€{processingFee.toFixed(2)}</span>
// //                 </div>

// //                 <hr className="my-4 border-slate-200" />

// //                 {/* Total Amount */}
// //                 <div className="flex justify-between items-center text-lg font-bold text-slate-900">
// //                   <span>Total Amount</span>
// //                   <span className="text-emerald-600 text-xl">€{totalAmount.toFixed(2)}</span>
// //                 </div>
// //               </div>

// //               {/* Blue Accommodation Details Footer */}
// //               {formData.registrationType === "withAccommodation" && (
// //                 <div className="bg-[#eff6ff] p-4 border-l-4 border-blue-500">
// //                   <h5 className="font-bold text-blue-700 text-sm mb-1">
// //                     Accommodation Details:
// //                   </h5>
// //                   <ul className="text-blue-600 text-sm space-y-1">
// //                     <li className="flex items-center gap-2">
// //                       <span className="text-blue-400">•</span> Duration: {formData.numberOfNights} night
// //                     </li>
// //                     <li className="flex items-center gap-2">
// //                       <span className="text-blue-400">•</span> Capacity: {formData.numberOfGuests} guest
// //                     </li>
// //                   </ul>
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           {/* 6. CAPTCHA */}
// //           <div className="bg-slate-50 border rounded-lg p-6">
// //             <p className="font-bold text-base mb-3">Security Verification</p>
// //             <div className="flex items-center gap-4 mb-4">
// //               <div className="bg-slate-800 text-white px-6 py-2 rounded-md font-mono text-base tracking-widest">
// //                 {captcha}
// //               </div>
// //               <button type="button" onClick={() => setCaptcha(generateCaptcha())}>
// //                 <RefreshCw size={18} />
// //               </button>
// //             </div>
// //             <input
// //               value={captchaInput}
// //               onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
// //               placeholder="Enter the code"
// //               className="w-full border rounded-lg px-4 py-2.5 text-sm"
// //             />
// //           </div>

// //           {/* SUBMIT */}
// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl flex justify-center items-center gap-2 text-base shadow-lg shadow-slate-200"
// //           >
// //             {loading ? "Processing..." : <>Confirm & Pay <ArrowRight size={18} /></>}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default NEWRegister;



// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { FaSyncAlt } from 'react-icons/fa';
// import pricingData from "./pricing.json"; // Assuming this is where your pricing data is located

// // ---------------- TYPES ----------------

// interface PricingItem {
//     planId: string;
//     registrationType: string;
//     presentationType: string;
//     nights: number;
//     price: number;
// }

// interface FormData {
//     planId: string;
//     conferenceCode: string;
//     title: string;
//     fullName: string;
//     email: string;
//     phone: string;
//     institute: string;
//     country: string;
//     registrationType: "registrationOnly" | "withAccommodation" | "virtual";
//     presentationType: string;
//     numberOfNights: number;
//     numberOfGuests: number;
//     captcha: string; // Added for UI consistency with first component's state structure
// }

// // ---------------- STYLES (From First Component) ----------------

// const Style: React.FC = () => (
//     <style>
//         {`
//       @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');

//       * {
//         font-family: 'IBM Plex Sans', sans-serif;
//       }

//       .form-input, .form-select {
//         width: 100%;
//         padding: 0.75rem 1rem;
//         border: 1px solid #e5e7eb;
//         border-radius: 0.5rem;
//         font-size: 1rem;
//         color: #1f2937;
//         transition: border-color 0.2s ease;
//       }
//       .form-input:focus, .form-select:focus {
//         outline: none;
//         border-color: #000;
//       }
//       .form-input.error, .form-select.error {
//         border-color: #ef4444;
//       }
//       .error-text {
//         color: #ef4444;
//         font-size: 0.875rem;
//         margin-top: 0.25rem;
//       }
//       .radio-group {
//         display: flex;
//         flex-wrap: wrap;
//         gap: 1rem;
//         margin-bottom: 1rem;
//       }
//       .radio-label {
//         display: flex;
//         align-items: center;
//         gap: 0.5rem;
//         cursor: pointer;
//       }
//       .radio-input {
//         width: 1.25rem;
//         height: 1.25rem;
//         border: 2px solid #1f2937;
//         border-radius: 50%;
//         appearance: none;
//         cursor: pointer;
//       }
//       .radio-input:checked {
//         background-color: #1f2937;
//         border-color: #1f2937;
//         position: relative;
//       }
//       .radio-input:checked::before {
//         content: '';
//         width: 0.5rem;
//         height: 0.5rem;
//         background-color: #fff;
//         border-radius: 50%;
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//       }
//       .payment-summary {
//         border-top: 2px dashed #1f2937;
//         padding-top: 1.5rem;
//         margin-top: 2rem;
//       }
//       .captcha-section {
//         background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
//         border: 1px solid #cbd5e1;
//         border-radius: 1rem;
//         padding: 1.5rem;
//         margin-top: 1.5rem;
//         box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
//       }
//       .captcha-container {
//         display: flex;
//         flex-direction: column;
//         gap: 1rem;
//       }
//       .captcha-display {
//         display: flex;
//         align-items: center;
//         gap: 1rem;
//         background: #ffffff;
//         padding: 1rem;
//         border-radius: 0.75rem;
//         border: 2px solid #e2e8f0;
//         box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
//       }
//       .captcha-image {
//         font-size: 1.75rem;
//         font-weight: 700;
//         letter-spacing: 0.2em;
//         background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
//         color: #ffffff;
//         padding: 0.75rem 1.25rem;
//         border-radius: 0.5rem;
//         text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
//         font-family: 'Courier New', monospace;
//         user-select: none;
//         min-width: 120px;
//         text-align: center;
//         position: relative;
//       }
//       .refresh-button {
//         background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
//         border: none;
//         color: white;
//         padding: 0.75rem;
//         border-radius: 0.5rem;
//         cursor: pointer;
//         transition: all 0.2s ease;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         min-width: 44px;
//         height: 44px;
//         box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
//       }
//       .captcha-input {
//         width: 100%;
//         padding: 0.875rem 1rem;
//         border: 2px solid #e2e8f0;
//         border-radius: 0.75rem;
//         font-size: 1rem;
//         font-weight: 500;
//         color: #1e293b;
//         background: #ffffff;
//         transition: all 0.2s ease;
//         letter-spacing: 0.1em;
//       }
//       .captcha-input:focus {
//         outline: none;
//         border-color: #3b82f6;
//         box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
//       }
//       .captcha-label {
//         font-weight: 600;
//         color: #1e293b;
//         margin-bottom: 0.5rem;
//         display: block;
//         font-size: 0.875rem;
//         text-transform: uppercase;
//         letter-spacing: 0.05em;
//       }
//       .captcha-help-text {
//         font-size: 0.75rem;
//         color: #64748b;
//         margin-top: 0.5rem;
//         display: flex;
//         align-items: center;
//         gap: 0.25rem;
//       }
//       .security-icon {
//         width: 1rem;
//         height: 1rem;
//         color: #64748b;
//       }
//       .info-section {
//         display: flex;
//         justify-content: space-between;
//         margin-bottom: 2rem;
//         padding: 1rem;
//         background-color: #f9fafb;
//         border-radius: 0.5rem;
//       }
//       .info-item {
//         text-align: center;
//       }
//       .info-item label {
//         font-weight: 600;
//         color: #1f2937;
//       }
//       .info-item p {
//         color: #4b5563;
//       }
//     `}
//     </style>
// );

// // ---------------- COMPONENT ----------------

// const RegistrationPage: React.FC = () => {
//     // ---- Logic State from Component 2 ----
//     const [loading, setLoading] = useState(false);
//     const [price, setPrice] = useState(0);
//     const [errors, setErrors] = useState<{ [key: string]: string }>({});

//     // Captcha Logic
//     const generateCaptcha = () => {
//         const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
//         let code = "";
//         for (let i = 0; i < 6; i++) {
//             code += chars[Math.floor(Math.random() * chars.length)];
//         }
//         return code;
//     };

//     const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
//     const [showCaptcha, setShowCaptcha] = useState(false);

//     // Form Data Logic
//     const [formData, setFormData] = useState<FormData>({
//         planId: "",
//         conferenceCode: "AI-ROBO-2026",
//         title: "",
//         fullName: "",
//         email: "",
//         phone: "",
//         institute: "",
//         country: "",
//         registrationType: "registrationOnly",
//         presentationType: "Poster",
//         numberOfNights: 1,
//         numberOfGuests: 0,
//         captcha: "",
//     });

//     // ---- Refs for Scroll Handling (From UI Component) ----
//     const nameRef = useRef<HTMLInputElement>(null);
//     const phoneRef = useRef<HTMLInputElement>(null);
//     const emailRef = useRef<HTMLInputElement>(null);
//     const instituteRef = useRef<HTMLInputElement>(null);
//     const countryRef = useRef<HTMLSelectElement>(null);
//     const captchaRef = useRef<HTMLInputElement>(null);
//     const errorSectionRef = useRef<HTMLDivElement>(null);

//     // ---- Plan Matching Logic (From Component 2) ----
//     useEffect(() => {
//         const plans = pricingData.pricing as PricingItem[];
//         const match = plans.find(
//             (p) =>
//                 p.registrationType === formData.registrationType &&
//                 p.presentationType === formData.presentationType &&
//                 p.nights === formData.numberOfNights
//         );

//         if (match) {
//             setPrice(match.price);
//             setFormData((prev) => ({ ...prev, planId: match.planId }));
//         } else {
//             setPrice(0);
//             setFormData((prev) => ({ ...prev, planId: "" }));
//         }
//     }, [
//         formData.registrationType,
//         formData.presentationType,
//         formData.numberOfNights,
//     ]);

//     const processingFee = price * 0.05;
//     const totalAmount = price + processingFee;

//     // ---- Handlers ----

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]:
//                 name === "numberOfGuests" || name === "numberOfNights"
//                     ? Number(value)
//                     : value,
//         }));
//         // Clear error when user types
//         if (errors[name]) {
//             setErrors((prev) => ({ ...prev, [name]: '' }));
//         }
//     };

//     const handleCaptchaRefresh = () => {
//         setCaptchaCode(generateCaptcha());
//         setFormData(prev => ({ ...prev, captcha: '' }));
//     };

//     const validate = () => {
//         const newErrors: { [key: string]: string } = {};

//         if (!formData.title) newErrors.title = 'Title is required';
//         if (!formData.fullName) newErrors.fullName = 'Full Name is required';
//         if (!formData.phone) newErrors.phone = 'Phone is required';
//         if (!formData.email) newErrors.email = 'Email is required';
//         if (!formData.institute) newErrors.institute = 'Institute is required';
//         if (!formData.country) newErrors.country = 'Country is required';
//         if (!formData.captcha) newErrors.captcha = 'Captcha is required';
//         if (formData.captcha.toUpperCase() !== captchaCode) {
//             newErrors.captcha = 'Incorrect captcha code';
//         }
//         if (!formData.planId) {
//             newErrors.general = "Please select valid options to generate a pricing plan.";
//         }

//         setErrors(newErrors);

//         // Scroll to error logic
//         if (Object.keys(newErrors).length > 0) {
//             const fieldRefs: { [key: string]: React.RefObject<any> } = {
//                 fullName: nameRef,
//                 phone: phoneRef,
//                 email: emailRef,
//                 institute: instituteRef,
//                 country: countryRef,
//                 captcha: captchaRef,
//             };

//             const firstErrorKey = Object.keys(newErrors)[0];
//             const ref = fieldRefs[firstErrorKey];
//             if (ref && ref.current) {
//                 const y = ref.current.getBoundingClientRect().top + window.scrollY - 100;
//                 window.scrollTo({ top: y, behavior: 'smooth' });
//                 ref.current.focus();
//             } else if (errorSectionRef.current) {
//                 const y = errorSectionRef.current.getBoundingClientRect().top + window.scrollY - 100;
//                 window.scrollTo({ top: y, behavior: 'smooth' });
//             }
//         }

//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!validate()) return;

//         setLoading(true);
//         try {
//             // Using the API endpoint from Component 2
//             const res = await axios.post(
//                 "https://backendconf.roboticsaisummit.com/api/registration/create",
//                 formData
//             );
//             window.location.href = res.data.checkoutUrl;
//         } catch (error) {
//             console.error(error);
//             setErrors(prev => ({ ...prev, general: "Registration failed. Please try again later." }));
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Keyboard shortcut for captcha paste
//     useEffect(() => {
//         const handlePasteShortcut = (e: KeyboardEvent) => {
//             if (document.activeElement === captchaRef.current) {
//                 if ((e.altKey && e.key.toLowerCase() === 'v') || (e.ctrlKey && e.key.toLowerCase() === 'v')) {
//                     e.preventDefault();
//                     navigator.clipboard.readText().then((clipText) => {
//                         setFormData((prev) => ({ ...prev, captcha: clipText.slice(0, 6).toUpperCase() }));
//                     });
//                 }
//             }
//         };
//         window.addEventListener('keydown', handlePasteShortcut);
//         return () => window.removeEventListener('keydown', handlePasteShortcut);
//     }, []);


//     // ---------------- RENDER UI (Structure from Component 1) ----------------

//     return (
//         <>
//             <Style />
//             {/* You can add <Header /> here if you have it */}
//             <section className="bg-gradient-to-b from-gray-50 pb-8 to-white">
//                 <div className="container mx-auto px-4 py-16 max-w-4xl">
//                     <div className="text-center mb-12">
//                         <span className="inline-block px-3 py-1 text-sm font-semibold text-black bg-gray-200 rounded-full mb-1">
//                             REGISTRATION OPEN
//                         </span>
//                         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
//                             Conference Registration
//                         </h2>
//                         <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
//                         <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//                             Register for the AI & Robotics Summit 2026
//                         </p>
//                     </div>

//                     <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             {/* INFO STRIP */}
//                             <div className="info-section">
//                                 <div className="info-item">
//                                     <label>Conference Date</label>
//                                     <p>July 28–30, 2026</p>
//                                 </div>
//                                 <div className="info-item">
//                                     <label>Location</label>
//                                     <p>Crowne Plaza - St. Peter’s Rome, Italy</p>
//                                 </div>
//                                 <div className="info-item">
//                                     <label>Registration Deadline</label>
//                                     <p>July 10, 2026</p>
//                                 </div>
//                             </div>

//                             {/* PERSONAL DETAILS GRID */}
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
//                                     <select
//                                         name="title"
//                                         value={formData.title}
//                                         onChange={handleInputChange}
//                                         className={`form-select${errors.title ? ' error' : ''}`}
//                                     >
//                                         <option value="">Select Title *</option>
//                                         <option value="Mr.">Mr.</option>
//                                         <option value="Ms.">Ms.</option>
//                                         <option value="Dr.">Dr.</option>
//                                         <option value="Prof.">Prof.</option>
//                                     </select>
//                                     {errors.title && <p className="error-text">{errors.title}</p>}
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
//                                     <input
//                                         type="text"
//                                         name="fullName"
//                                         value={formData.fullName}
//                                         onChange={handleInputChange}
//                                         placeholder="Enter your full name"
//                                         className={`form-input${errors.fullName ? ' error' : ''}`}
//                                         ref={nameRef}
//                                     />
//                                     {errors.fullName && <p className="error-text">{errors.fullName}</p>}
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
//                                     <input
//                                         type="text"
//                                         name="phone"
//                                         value={formData.phone}
//                                         onChange={handleInputChange}
//                                         placeholder="Enter your phone number"
//                                         className={`form-input${errors.phone ? ' error' : ''}`}
//                                         ref={phoneRef}
//                                     />
//                                     {errors.phone && <p className="error-text">{errors.phone}</p>}
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleInputChange}
//                                         placeholder="Enter your email address"
//                                         className={`form-input${errors.email ? ' error' : ''}`}
//                                         ref={emailRef}
//                                     />
//                                     {errors.email && <p className="error-text">{errors.email}</p>}
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Institute/Organization *</label>
//                                     <input
//                                         type="text"
//                                         name="institute"
//                                         value={formData.institute}
//                                         onChange={handleInputChange}
//                                         placeholder="Enter your institute/organization"
//                                         className={`form-input${errors.institute ? ' error' : ''}`}
//                                         ref={instituteRef}
//                                     />
//                                     {errors.institute && <p className="error-text">{errors.institute}</p>}
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
//                                     <select
//                                         name="country"
//                                         value={formData.country}
//                                         onChange={handleInputChange}
//                                         className={`form-select${errors.country ? ' error' : ''}`}
//                                         ref={countryRef}
//                                     >
//                                         <option value="">Select your country</option>
//                                         <option value="United States">United States</option>
//                                         <option value="United Kingdom">United Kingdom</option>
//                                         <option value="Canada">Canada</option>
//                                         <option value="Australia">Australia</option>
//                                         {/* Add more countries as needed */}
//                                         <option value="Italy">Italy</option>
//                                         <option value="Germany">Germany</option>
//                                         <option value="France">France</option>
//                                         <option value="India">India</option>
//                                         <option value="China">China</option>
//                                     </select>
//                                     {errors.country && <p className="error-text">{errors.country}</p>}
//                                 </div>
//                             </div>

//                             {/* REGISTRATION TYPE RADIO */}
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-4">Registration Type *</label>
//                                 <div className="radio-group">
//                                     {[
//                                         { val: "registrationOnly", label: "Registration Only (In Person)" },
//                                         { val: "withAccommodation", label: "Registration + Accommodation" },
//                                         { val: "virtual", label: "Registration (Virtual)" }
//                                     ].map((opt) => (
//                                         <label key={opt.val} className="radio-label">
//                                             <input
//                                                 type="radio"
//                                                 name="registrationType"
//                                                 value={opt.val}
//                                                 checked={formData.registrationType === opt.val}
//                                                 onChange={handleInputChange}
//                                                 className="radio-input"
//                                             />
//                                             <span>{opt.label}</span>
//                                         </label>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* PRESENTATION TYPE RADIO */}
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-4">Presentation Type *</label>
//                                 <div className="radio-group">
//                                     {["Speaker", "Poster", "Delegate", "Listener", "Student", "Exhibitor"].map((type) => (
//                                         <label key={type} className="radio-label">
//                                             <input
//                                                 type="radio"
//                                                 name="presentationType"
//                                                 value={type}
//                                                 checked={formData.presentationType === type}
//                                                 onChange={handleInputChange}
//                                                 className="radio-input"
//                                             />
//                                             <span>{type}</span>
//                                         </label>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* ACCOMMODATION SECTION (Conditionally Rendered) */}
//                             {formData.registrationType === 'withAccommodation' && (
//                                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
//                                     <div className="flex items-center mb-4">
//                                         <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                                         </svg>
//                                         <h4 className="text-lg font-semibold text-blue-900">Accommodation Options</h4>
//                                     </div>

//                                     <div className="mb-4 p-4 bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-400 rounded-lg shadow">
//                                         <div className="flex items-center gap-2">
//                                             <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <circle cx="12" cy="12" r="10" strokeWidth="2" />
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
//                                             </svg>
//                                             <span className="text-blue-900 font-medium text-base">
//                                                 {formData.numberOfGuests === 0
//                                                     ? 'Accommodation will be provided for you only.'
//                                                     : `Accommodation will be provided for you and ${formData.numberOfGuests} additional guest${formData.numberOfGuests > 1 ? 's' : ''}.`
//                                                 }
//                                             </span>
//                                         </div>
//                                         <p className="text-xs text-blue-700 mt-2">
//                                             Select the number of guests to clarify your accommodation needs.<br />
//                                             <span className="font-semibold">0</span> means only you, <span className="font-semibold">1</span> or more means you plus that number of guests.
//                                         </p>
//                                     </div>

//                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
//                                             <select
//                                                 name="numberOfGuests"
//                                                 value={formData.numberOfGuests}
//                                                 onChange={handleInputChange}
//                                                 className="form-select"
//                                             >
//                                                 {[...Array(4)].map((_, i) => (
//                                                     <option key={i} value={i}>
//                                                         {i === 0 ? '0 (Just Me)' : `${i} Guest${i > 1 ? 's' : ''}`}
//                                                     </option>
//                                                 ))}
//                                             </select>
//                                         </div>

//                                         <div>
//                                             <label className="block text-sm font-medium text-gray-700 mb-2">Number of Nights</label>
//                                             <select
//                                                 name="numberOfNights"
//                                                 value={formData.numberOfNights}
//                                                 onChange={handleInputChange}
//                                                 className="form-select"
//                                             >
//                                                 {[1, 2, 3].map(num => (
//                                                     <option key={num} value={num}>{num} Night{num > 1 ? 's' : ''}</option>
//                                                 ))}
//                                             </select>
//                                         </div>
//                                     </div>

//                                     <div className="mt-4 p-3 bg-white border border-blue-200 rounded text-sm text-gray-700">
//                                         <p className="font-medium text-gray-900 mb-1">Accommodation Details:</p>
//                                         <p>• Conference Date: July 28–30, 2026</p>
//                                         <p>• Location: Crowne Plaza Rome - St. Peter’s</p>
//                                         <p>• Selected: {formData.numberOfGuests} guest{formData.numberOfGuests > 1 ? 's' : ''} for {formData.numberOfNights} night{formData.numberOfNights > 1 ? 's' : ''}</p>
//                                     </div>
//                                 </div>
//                             )}

//                             {/* CAPTCHA SECTION */}
//                             <div className="captcha-section">
//                                 <div className="captcha-container">
//                                     <label className="captcha-label">Security Verification</label>
//                                     <div className="captcha-display">
//                                         <div className="captcha-image">{captchaCode}</div>
//                                         <button type="button" onClick={handleCaptchaRefresh} className="refresh-button" title="Generate new captcha">
//                                             <FaSyncAlt />
//                                         </button>
//                                     </div>
//                                     <div className="captcha-input-container">
//                                         <div style={{ position: 'relative' }}>
//                                             <input
//                                                 type={showCaptcha ? 'text' : 'password'}
//                                                 name="captcha"
//                                                 value={formData.captcha}
//                                                 onChange={(e) => {
//                                                     setFormData({ ...formData, captcha: e.target.value.toUpperCase() });
//                                                     if (errors.captcha) setErrors({ ...errors, captcha: '' });
//                                                 }}
//                                                 placeholder="Enter the code shown above"
//                                                 className={`captcha-input${errors.captcha ? ' error' : ''}`}
//                                                 autoComplete="off"
//                                                 maxLength={6}
//                                                 ref={captchaRef}
//                                             />
//                                             <button
//                                                 type="button"
//                                                 onClick={() => setShowCaptcha((v) => !v)}
//                                                 style={{
//                                                     position: 'absolute',
//                                                     right: 8,
//                                                     top: '50%',
//                                                     transform: 'translateY(-50%)',
//                                                     background: 'none',
//                                                     border: 'none',
//                                                     cursor: 'pointer',
//                                                     padding: 0,
//                                                     color: '#64748b',
//                                                 }}
//                                             >
//                                                 {showCaptcha ? (
//                                                     <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13.875 18.825A10.05 10.05 0 0 1 12 19c-5 0-9-4.03-9-7 0-1.13.44-2.19 1.22-3.13M6.53 6.53A9.97 9.97 0 0 1 12 5c5 0 9 4.03 9 7 0 1.13-.44 2.19-1.22 3.13M1 1l22 22" strokeLinecap="round" strokeLinejoin="round" /></svg>
//                                                 ) : (
//                                                     <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="9" ry="7" /><circle cx="12" cy="12" r="3" /></svg>
//                                                 )}
//                                             </button>
//                                         </div>
//                                         <div className="captcha-help-text">
//                                             <svg className="security-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                                             </svg>
//                                             Please enter the 6-character code to verify you're human. <span style={{ marginLeft: 4 }}>Use <b>Alt+V</b> or <b>Ctrl+V</b> to paste from clipboard.</span>
//                                         </div>
//                                     </div>
//                                     {errors.captcha && <p className="error-text">{errors.captcha}</p>}
//                                 </div>
//                             </div>

//                             {/* ERROR DISPLAY SECTION */}
//                             {Object.keys(errors).length > 0 && errors.general && (
//                                 <div ref={errorSectionRef} className="text-red-500 text-sm p-3 bg-red-50 border border-red-200 rounded">
//                                     {errors.general}
//                                 </div>
//                             )}

//                             {/* PRICING SUMMARY (From Component 1 UI) */}
//                             {formData.planId && (
//                                 <div className="payment-summary">
//                                     <h3 className="text-lg font-semibold mb-4">Pricing Summary</h3>
//                                     <div className="mb-4 p-4 bg-gray-50 rounded-lg">
//                                         <h4 className="font-semibold text-lg mb-3 text-gray-900">Order Details</h4>

//                                         <div className="flex justify-between items-center mb-2">
//                                             <span className="font-medium">{formData.presentationType} Registration</span>
//                                             {/* Logic to show partial price if split, mirroring Component 2 logic */}
//                                             <span className="font-semibold">
//                                                 €{formData.registrationType === "withAccommodation" ? (price * 0.7).toFixed(0) : price}
//                                             </span>
//                                         </div>

//                                         {formData.registrationType === "withAccommodation" && (
//                                             <div className="flex justify-between items-center mb-2">
//                                                 <span className="font-medium">
//                                                     Accommodation ({formData.numberOfNights} night, {formData.numberOfGuests} guest)
//                                                 </span>
//                                                 <span className="font-semibold">
//                                                     €{(price * 0.3).toFixed(0)}
//                                                 </span>
//                                             </div>
//                                         )}

//                                         <div className="border-t border-gray-300 my-3"></div>

//                                         <div className="flex justify-between items-center mb-2">
//                                             <span className="text-gray-600">Subtotal</span>
//                                             <span className="font-medium">€{price}</span>
//                                         </div>

//                                         <div className="flex justify-between items-center mb-3">
//                                             <span className="text-gray-600">Processing Fee (5%)</span>
//                                             <span className="font-medium">€{processingFee.toFixed(2)}</span>
//                                         </div>

//                                         <div className="flex justify-between items-center font-bold text-xl border-t border-gray-400 pt-3">
//                                             <span>Total Amount</span>
//                                             <span className="text-green-600">€{totalAmount.toFixed(2)}</span>
//                                         </div>
//                                     </div>

//                                     <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
//                                         <div className="flex items-start">
//                                             <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                             </svg>
//                                             <div className="text-sm text-blue-800">
//                                                 <p className="font-semibold mb-1">Secure Payment Process</p>
//                                                 <p>After clicking "Register & Pay Now", you'll be redirected to our secure payment page to complete your registration payment in euros (EUR).</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}

//                             {/* SUBMIT BUTTON */}
//                             <div className="flex justify-center">
//                                 <button
//                                     type="submit"
//                                     disabled={loading}
//                                     className={`px-8 py-3 rounded-lg font-semibold transition-colors ${loading
//                                         ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
//                                         : 'bg-black text-white hover:bg-gray-800'
//                                         }`}
//                                 >
//                                     {loading ? 'Processing...' : 'Register & Pay Now'}
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </section>
//             {/* <FooterSection /> */}
//         </>
//     );
// };

// export default RegistrationPage;




import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaSyncAlt } from 'react-icons/fa';
import pricingData from "./pricing.json"; 

// ---------------- TYPES ----------------

interface PricingItem {
    planId: string;
    registrationType: string;
    presentationType: string;
    nights: number;
    price: number;
}

interface FormData {
    planId: string;
    conferenceCode: string;
    title: string;
    fullName: string;
    email: string;
    phone: string;
    institute: string;
    country: string;
    registrationType: "registrationOnly" | "withAccommodation" | "virtual";
    presentationType: string;
    numberOfNights: number;
    numberOfGuests: number;
    captcha: string; 
}

// ---------------- STYLES ----------------

const Style: React.FC = () => (
    <style>
        {`
      @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');

      * {
        font-family: 'IBM Plex Sans', sans-serif;
      }

      .form-input, .form-select {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        font-size: 1rem;
        color: #1f2937;
        transition: border-color 0.2s ease;
      }
      .form-input:focus, .form-select:focus {
        outline: none;
        border-color: #000;
      }
      .form-input.error, .form-select.error {
        border-color: #ef4444;
      }
      .error-text {
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
      }
      .radio-group {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 1rem;
      }
      .radio-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
      }
      .radio-input {
        width: 1.25rem;
        height: 1.25rem;
        border: 2px solid #1f2937;
        border-radius: 50%;
        appearance: none;
        cursor: pointer;
      }
      .radio-input:checked {
        background-color: #1f2937;
        border-color: #1f2937;
        position: relative;
      }
      .radio-input:checked::before {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .payment-summary {
        border-top: 2px dashed #1f2937;
        padding-top: 1.5rem;
        margin-top: 2rem;
      }
      .captcha-section {
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        border: 1px solid #cbd5e1;
        border-radius: 1rem;
        padding: 1.5rem;
        margin-top: 1.5rem;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
      }
      .captcha-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .captcha-display {
        display: flex;
        align-items: center;
        gap: 1rem;
        background: #ffffff;
        padding: 1rem;
        border-radius: 0.75rem;
        border: 2px solid #e2e8f0;
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
      }
      .captcha-image {
        font-size: 1.75rem;
        font-weight: 700;
        letter-spacing: 0.2em;
        background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
        color: #ffffff;
        padding: 0.75rem 1.25rem;
        border-radius: 0.5rem;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        font-family: 'Courier New', monospace;
        user-select: none;
        min-width: 120px;
        text-align: center;
        position: relative;
      }
      .refresh-button {
        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        border: none;
        color: white;
        padding: 0.75rem;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 44px;
        height: 44px;
        box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
      }
      .captcha-input {
        width: 100%;
        padding: 0.875rem 1rem;
        border: 2px solid #e2e8f0;
        border-radius: 0.75rem;
        font-size: 1rem;
        font-weight: 500;
        color: #1e293b;
        background: #ffffff;
        transition: all 0.2s ease;
        letter-spacing: 0.1em;
      }
      .captcha-input:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      }
      .captcha-label {
        font-weight: 600;
        color: #1e293b;
        margin-bottom: 0.5rem;
        display: block;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .captcha-help-text {
        font-size: 0.75rem;
        color: #64748b;
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }
      .security-icon {
        width: 1rem;
        height: 1rem;
        color: #64748b;
      }
      .info-section {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
        padding: 1rem;
        background-color: #f9fafb;
        border-radius: 0.5rem;
      }
      .info-item {
        text-align: center;
      }
      .info-item label {
        font-weight: 600;
        color: #1f2937;
      }
      .info-item p {
        color: #4b5563;
      }
    `}
    </style>
);

// ---------------- COMPONENT ----------------

const RegistrationPage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [price, setPrice] = useState(0);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});


    

    // Captcha Logic
    const generateCaptcha = () => {
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        let code = "";
        for (let i = 0; i < 6; i++) {
            code += chars[Math.floor(Math.random() * chars.length)];
        }
        return code;
    };

    const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
    const [showCaptcha, setShowCaptcha] = useState(false);

    // Form Data Logic
    const [formData, setFormData] = useState<FormData>({
        planId: "",
        conferenceCode: "AI-ROBO-2026",
        title: "",
        fullName: "",
        email: "",
        phone: "",
        institute: "",
        country: "",
        registrationType: "registrationOnly",
        presentationType: "Poster",
        numberOfNights: 1, // This defaults to 1
        numberOfGuests: 0,
        captcha: "",
    });

    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const instituteRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLSelectElement>(null);
    const captchaRef = useRef<HTMLInputElement>(null);
    const errorSectionRef = useRef<HTMLDivElement>(null);

    // ---- Plan Matching Logic (FIXED) ----
    useEffect(() => {
        const plans = pricingData.pricing as PricingItem[];
        
        // 🔴 FIX: If not "withAccommodation", we must look for nights = 0 in the JSON
        const targetNights = formData.registrationType === 'withAccommodation' 
            ? formData.numberOfNights 
            : 0;

        const match = plans.find(
            (p) =>
                p.registrationType === formData.registrationType &&
                p.presentationType === formData.presentationType &&
                p.nights === targetNights // Use calculated target, not state directly
        );

        if (match) {
            setPrice(match.price);
            setFormData((prev) => ({ ...prev, planId: match.planId }));
        } else {
            setPrice(0);
            setFormData((prev) => ({ ...prev, planId: "" }));
        }
    }, [
        formData.registrationType,
        formData.presentationType,
        formData.numberOfNights,
    ]);

    const processingFee = price * 0.05;
    const totalAmount = price + processingFee;

    // ---- Handlers ----

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:
                name === "numberOfGuests" || name === "numberOfNights"
                    ? Number(value)
                    : value,
        }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleCaptchaRefresh = () => {
        setCaptchaCode(generateCaptcha());
        setFormData(prev => ({ ...prev, captcha: '' }));
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.title) newErrors.title = 'Title is required';
        if (!formData.fullName) newErrors.fullName = 'Full Name is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.institute) newErrors.institute = 'Institute is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.captcha) newErrors.captcha = 'Captcha is required';
        if (formData.captcha.toUpperCase() !== captchaCode) {
            newErrors.captcha = 'Incorrect captcha code';
        }
        if (!formData.planId) {
            newErrors.general = "Please select valid options to generate a pricing plan.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            const fieldRefs: { [key: string]: React.RefObject<any> } = {
                fullName: nameRef,
                phone: phoneRef,
                email: emailRef,
                institute: instituteRef,
                country: countryRef,
                captcha: captchaRef,
            };

            const firstErrorKey = Object.keys(newErrors)[0];
            const ref = fieldRefs[firstErrorKey];
            if (ref && ref.current) {
                const y = ref.current.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: y, behavior: 'smooth' });
                ref.current.focus();
            } else if (errorSectionRef.current) {
                const y = errorSectionRef.current.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }

        return Object.keys(newErrors).length === 0;
    };

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     if (!validate()) return;

    //     setLoading(true);
    //     try {
    //         const res = await axios.post(
    //             "https://backendconf.roboticsaisummit.com/api/registration/create",
    //             formData
    //         );
    //         window.location.href = res.data.checkoutUrl;
    //     } catch (error) {
    //         console.error(error);
    //         setErrors(prev => ({ ...prev, general: "Registration failed. Please try again later." }));
    //     } finally {
    //         setLoading(false);
    //     }
    // };


    const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validate()) return;

  setLoading(true);
  setErrors({}); // reset old errors

  try {
    const res = await axios.post(
      "https://backendconf.roboticsaisummit.com/api/registration/create",
    // "http://localhost:8080/api/registration/create",
      formData
    );

    // ✅ Success → redirect to payment
    window.location.href = res.data.checkoutUrl;

  } catch (error: any) {
    console.error(error);

    // ✅ Handle "already registered" case
    if (
      error.response &&
      error.response.data &&
      error.response.data.error === "User already registered with this email"
    ) {
      setErrors({
        email: "This email is already registered for the conference.",
        general: "You have already completed registration using this email address."
      });

      // Scroll to error section
      setTimeout(() => {
        if (emailRef.current) {
          const y =
            emailRef.current.getBoundingClientRect().top +
            window.scrollY -
            100;
          window.scrollTo({ top: y, behavior: "smooth" });
          emailRef.current.focus();
        }
      }, 100);

    } else {
      // ❌ Generic fallback error
      setErrors({
        general: "Registration failed. Please try again later."
      });
    }
  } finally {
    setLoading(false);
  }
};


    useEffect(() => {
        const handlePasteShortcut = (e: KeyboardEvent) => {
            if (document.activeElement === captchaRef.current) {
                if ((e.altKey && e.key.toLowerCase() === 'v') || (e.ctrlKey && e.key.toLowerCase() === 'v')) {
                    e.preventDefault();
                    navigator.clipboard.readText().then((clipText) => {
                        setFormData((prev) => ({ ...prev, captcha: clipText.slice(0, 6).toUpperCase() }));
                    });
                }
            }
        };
        window.addEventListener('keydown', handlePasteShortcut);
        return () => window.removeEventListener('keydown', handlePasteShortcut);
    }, []);



    const ACCOMMODATION_PER_NIGHT = 175;

const accommodationCost =
  formData.registrationType === "withAccommodation"
    ? ACCOMMODATION_PER_NIGHT * formData.numberOfNights
    : 0;

const registrationCost =
  formData.registrationType === "withAccommodation"
    ? price - accommodationCost
    : price;

    // ---------------- RENDER UI ----------------

    return (
        <>
            <Style />
            <section className="bg-gradient-to-b from-gray-50 pb-8 to-white">
                <div className="container mx-auto px-4 py-16 max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-black bg-gray-200 rounded-full mb-1">
                            REGISTRATION OPEN
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                            Conference Registration
                        </h2>
                        <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Register for the AI & Robotics Summit 2026
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* INFO STRIP */}
                            <div className="info-section">
                                <div className="info-item">
                                    <label>Conference Date</label>
                                    <p>July 28–30, 2026</p>
                                </div>
                                <div className="info-item">
                                    <label>Location</label>
                                    <p>Crowne Plaza - St. Peter’s Rome, Italy</p>
                                </div>
                                <div className="info-item">
                                    <label>Registration Deadline</label>
                                    <p>July 10, 2026</p>
                                </div>
                            </div>

                            {/* PERSONAL DETAILS GRID */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                                    <select
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        className={`form-select${errors.title ? ' error' : ''}`}
                                    >
                                        <option value="">Select Title *</option>
                                        <option value="Mr.">Mr.</option>
                                        <option value="Ms.">Ms.</option>
                                        <option value="Dr.">Dr.</option>
                                        <option value="Prof.">Prof.</option>
                                    </select>
                                    {errors.title && <p className="error-text">{errors.title}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full name"
                                        className={`form-input${errors.fullName ? ' error' : ''}`}
                                        ref={nameRef}
                                    />
                                    {errors.fullName && <p className="error-text">{errors.fullName}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter your phone number"
                                        className={`form-input${errors.phone ? ' error' : ''}`}
                                        ref={phoneRef}
                                    />
                                    {errors.phone && <p className="error-text">{errors.phone}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email address"
                                        className={`form-input${errors.email ? ' error' : ''}`}
                                        ref={emailRef}
                                    />
                                    {errors.email && <p className="error-text">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Institute/Organization *</label>
                                    <input
                                        type="text"
                                        name="institute"
                                        value={formData.institute}
                                        onChange={handleInputChange}
                                        placeholder="Enter your institute/organization"
                                        className={`form-input${errors.institute ? ' error' : ''}`}
                                        ref={instituteRef}
                                    />
                                    {errors.institute && <p className="error-text">{errors.institute}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        className={`form-select${errors.country ? ' error' : ''}`}
                                        ref={countryRef}
                                    >
                                        <option value="">Select your country</option>
                                        <option value="United States">United States</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Germany">Germany</option>
                                        <option value="France">France</option>
                                        <option value="India">India</option>
                                        <option value="China">China</option>
                                    </select>
                                    {errors.country && <p className="error-text">{errors.country}</p>}
                                </div>
                            </div>

                            {/* REGISTRATION TYPE RADIO */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-4">Registration Type *</label>
                                <div className="radio-group">
                                    {[
                                        { val: "registrationOnly", label: "Registration Only (In Person)" },
                                        { val: "withAccommodation", label: "Registration + Accommodation" },
                                        { val: "virtual", label: "Registration (Virtual)" }
                                    ].map((opt) => (
                                        <label key={opt.val} className="radio-label">
                                            <input
                                                type="radio"
                                                name="registrationType"
                                                value={opt.val}
                                                checked={formData.registrationType === opt.val}
                                                onChange={handleInputChange}
                                                className="radio-input"
                                            />
                                            <span>{opt.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* PRESENTATION TYPE RADIO */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-4">Presentation Type *</label>
                                <div className="radio-group">
                                    {["Speaker", "Poster", "Delegate", "Listener", "Student"].map((type) => (
                                        <label key={type} className="radio-label">
                                            <input
                                                type="radio"
                                                name="presentationType"
                                                value={type}
                                                checked={formData.presentationType === type}
                                                onChange={handleInputChange}
                                                className="radio-input"
                                            />
                                            <span>{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* ACCOMMODATION SECTION (Conditionally Rendered) */}
                            {formData.registrationType === 'withAccommodation' && (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
                                    <div className="flex items-center mb-4">
                                        <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <h4 className="text-lg font-semibold text-blue-900">Accommodation Options</h4>
                                    </div>

                                    <div className="mb-4 p-4 bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-400 rounded-lg shadow">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                                            </svg>
                                            <span className="text-blue-900 font-medium text-base">
                                                {formData.numberOfGuests === 0
                                                    ? 'Accommodation will be provided for you only.'
                                                    : `Accommodation will be provided for you and ${formData.numberOfGuests} additional guest${formData.numberOfGuests > 1 ? 's' : ''}.`
                                                }
                                            </span>
                                        </div>
                                        <p className="text-xs text-blue-700 mt-2">
                                            Select the number of guests to clarify your accommodation needs.<br />
                                            <span className="font-semibold">0</span> means only you, <span className="font-semibold">1</span> or more means you plus that number of guests.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                                            <select
                                                name="numberOfGuests"
                                                value={formData.numberOfGuests}
                                                onChange={handleInputChange}
                                                className="form-select"
                                            >
                                                {[...Array(4)].map((_, i) => (
                                                    <option key={i} value={i}>
                                                        {i === 0 ? '0 (Just Me)' : `${i} Guest${i > 1 ? 's' : ''}`}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Nights</label>
                                            <select
                                                name="numberOfNights"
                                                value={formData.numberOfNights}
                                                onChange={handleInputChange}
                                                className="form-select"
                                            >
                                                {[1, 2, 3].map(num => (
                                                    <option key={num} value={num}>{num} Night{num > 1 ? 's' : ''}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mt-4 p-3 bg-white border border-blue-200 rounded text-sm text-gray-700">
                                        <p className="font-medium text-gray-900 mb-1">Accommodation Details:</p>
                                        <p>• Conference Date: July 28–30, 2026</p>
                                        <p>• Location: Crowne Plaza Rome - St. Peter’s</p>
                                        <p>• Selected: {formData.numberOfGuests} guest{formData.numberOfGuests > 1 ? 's' : ''} for {formData.numberOfNights} night{formData.numberOfNights > 1 ? 's' : ''}</p>
                                    </div>
                                </div>
                            )}



                            {/* ERROR DISPLAY SECTION */}
                            {Object.keys(errors).length > 0 && errors.general && (
                                <div ref={errorSectionRef} className="text-red-500 text-sm p-3 bg-red-50 border border-red-200 rounded">
                                    {errors.general}
                                </div>
                            )}






                            {/* PRICING SUMMARY */}
                            {/* {formData.planId && (
                                <div className="payment-summary">
                                    <h3 className="text-lg font-semibold mb-4">Pricing Summary</h3>
                                    <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                                        <h4 className="font-semibold text-lg mb-3 text-gray-900">Order Details</h4>

                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium">{formData.presentationType} Registration</span>
                                            <span className="font-semibold">
                                               
                                                €{formData.registrationType === "withAccommodation" 
                                                    ? (price - (formData.numberOfNights * 100)) 
                                                    : price}
                                                
                                            </span>
                                        </div>

                                        {formData.registrationType === "withAccommodation" && (
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-medium">
                                                    Accommodation ({formData.numberOfNights} night{formData.numberOfNights > 1 ? 's':''})
                                                </span>
                                                <span className="font-semibold">
                                                    
                                                    Included in Total
                                                </span>
                                            </div>
                                        )}

                                        <div className="border-t border-gray-300 my-3"></div>

                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600">Subtotal</span>
                                            <span className="font-medium">€{price}</span>
                                        </div>

                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-gray-600">Processing Fee (5%)</span>
                                            <span className="font-medium">€{processingFee.toFixed(2)}</span>
                                        </div>

                                        <div className="flex justify-between items-center font-bold text-xl border-t border-gray-400 pt-3">
                                            <span>Total Amount</span>
                                            <span className="text-green-600">€{totalAmount.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                        <div className="flex items-start">
                                            <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <div className="text-sm text-blue-800">
                                                <p className="font-semibold mb-1">Secure Payment Process</p>
                                                <p>After clicking "Register & Pay Now", you'll be redirected to our secure payment page to complete your registration payment in euros (EUR).</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )} */}





                            {/* PRICING SUMMARY */}
{formData.planId && (
  <div className="payment-summary">
    <h3 className="text-lg font-semibold mb-4">Pricing Summary</h3>

    <div className="mb-4 p-4 bg-gray-50 rounded-lg">
      <h4 className="font-semibold text-lg mb-3 text-gray-900">
        Order Details
      </h4>

      {/* REGISTRATION */}
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium uppercase">
          {formData.presentationType} Registration
        </span>
        <span className="font-semibold">
          €{registrationCost.toFixed(2)}
        </span>
      </div>

      {/* ACCOMMODATION */}
      {formData.registrationType === "withAccommodation" && (
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">
            Accommodation ({formData.numberOfNights} night
            {formData.numberOfNights > 1 ? "s" : ""},{" "}
            {formData.numberOfGuests} guest
            {formData.numberOfGuests > 1 ? "s" : ""})
          </span>
          <span className="font-semibold">
            €{accommodationCost.toFixed(2)}
          </span>
        </div>
      )}

      <div className="border-t border-gray-300 my-3"></div>

      {/* SUBTOTAL */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600">Subtotal</span>
        <span className="font-medium">€{price.toFixed(2)}</span>
      </div>

      {/* PROCESSING FEE */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-600">Processing Fee (5%)</span>
        <span className="font-medium">
          €{processingFee.toFixed(2)}
        </span>
      </div>

      {/* TOTAL */}
      <div className="flex justify-between items-center font-bold text-xl border-t border-gray-400 pt-3">
        <span>Total Amount</span>
        <span className="text-green-600">
          €{totalAmount.toFixed(2)}
        </span>
      </div>
    </div>

    {/* INFO BOX */}
    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <div className="flex items-start">
        <svg
          className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="text-sm text-blue-800">
          <p className="font-semibold mb-1">Secure Payment Process</p>
          <p>
            After clicking <b>"Register & Pay Now"</b>, you will be redirected
            to a secure payment page to complete your registration.
          </p>
        </div>
      </div>
    </div>
  </div>
)}







                            

                                                        {/* CAPTCHA SECTION */}
                            <div className="captcha-section">
                                <div className="captcha-container">
                                    <label className="captcha-label">Security Verification</label>
                                    <div className="captcha-display">
                                        <div className="captcha-image">{captchaCode}</div>
                                        <button type="button" onClick={handleCaptchaRefresh} className="refresh-button" title="Generate new captcha">
                                            <FaSyncAlt />
                                        </button>
                                    </div>
                                    <div className="captcha-input-container">
                                        <div style={{ position: 'relative' }}>
                                            <input
                                                type={showCaptcha ? 'text' : 'password'}
                                                name="captcha"
                                                value={formData.captcha}
                                                onChange={(e) => {
                                                    setFormData({ ...formData, captcha: e.target.value.toUpperCase() });
                                                    if (errors.captcha) setErrors({ ...errors, captcha: '' });
                                                }}
                                                placeholder="Enter the code shown above"
                                                className={`captcha-input${errors.captcha ? ' error' : ''}`}
                                                autoComplete="off"
                                                maxLength={6}
                                                ref={captchaRef}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowCaptcha((v) => !v)}
                                                style={{
                                                    position: 'absolute',
                                                    right: 8,
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    background: 'none',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    padding: 0,
                                                    color: '#64748b',
                                                }}
                                            >
                                                {showCaptcha ? (
                                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13.875 18.825A10.05 10.05 0 0 1 12 19c-5 0-9-4.03-9-7 0-1.13.44-2.19 1.22-3.13M6.53 6.53A9.97 9.97 0 0 1 12 5c5 0 9 4.03 9 7 0 1.13-.44 2.19-1.22 3.13M1 1l22 22" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                ) : (
                                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="9" ry="7" /><circle cx="12" cy="12" r="3" /></svg>
                                                )}
                                            </button>
                                        </div>
                                        <div className="captcha-help-text">
                                            <svg className="security-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            Please enter the 6-character code to verify you're human. <span style={{ marginLeft: 4 }}>Use <b>Alt+V</b> or <b>Ctrl+V</b> to paste from clipboard.</span>
                                        </div>
                                    </div>
                                    {errors.captcha && <p className="error-text">{errors.captcha}</p>}
                                </div>
                            </div>

                            {/* SUBMIT BUTTON */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`px-8 py-3 rounded-lg font-semibold transition-colors ${loading
                                        ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                                        : 'bg-black text-white hover:bg-gray-800'
                                        }`}
                                >
                                    {loading ? 'Processing...' : 'Register & Pay Now'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RegistrationPage;
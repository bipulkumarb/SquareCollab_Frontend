// import React, { useState, useEffect } from "react";
// // import UserMenu from "../../components/Layout/UserMenu";
// import { useAuth } from "../../context/Auth";
// import toast from "react-hot-toast";
// import axios from "axios";

// const ScholarProfile = () => {
//   // context
//   const [auth, setAuth] = useAuth();

//   // state
//   const [name, setName] = useState("");
//   const [affiliation, setAffiliation] = useState("");
//   const [title, setTitle] = useState("");
//   const [contact, setContact] = useState("");
//   const [researchInterests, setResearchInterests] = useState("");
//   const [education, setEducation] = useState("");
//   const [publications, setPublications] = useState("");
//   const [professionalExperience, setProfessionalExperience] = useState("");
//   const [honorsAndAwards, setHonorsAndAwards] = useState("");
//   const [professionalMemberships, setProfessionalMemberships] = useState("");
//   const [skills, setSkills] = useState("");
//   const [socialMediaProfiles, setSocialMediaProfiles] = useState("");
//   const [photo, setPhoto] = useState("");

//   // get user data
//   useEffect(() => {
//     const {
//       name,
//       affiliation,
//       title,
//       contact,
//       researchInterests,
//       education,
//       publications,
//       professionalExperience,
//       honorsAndAwards,
//       professionalMemberships,
//       skills,
//       socialMediaProfiles,
//       photo,
//     } = auth?.user || {};

//     setName(name || "");
//     setAffiliation(affiliation || "");
//     setTitle(title || "");
//     setContact(contact || "");
//     setResearchInterests(researchInterests || "");
//     setEducation(education || "");
//     setPublications(publications || "");
//     setProfessionalExperience(professionalExperience || "");
//     setHonorsAndAwards(honorsAndAwards || "");
//     setProfessionalMemberships(professionalMemberships || "");
//     setSkills(skills || "");
//     setSocialMediaProfiles(socialMediaProfiles || "");
//     setPhoto(photo || "");
//   }, [auth?.user]);

//   // form function
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.put("/api/v1/scholar", {
//         name: name || auth?.user.name,
//         affiliation: affiliation || auth?.user.affiliation,
//         title: title || auth?.user.title,
//         contact: contact || auth?.user.contact,
//         researchInterests: researchInterests || auth?.user.researchInterests,
//         education: education || auth?.user.education,
//         publications: publications || auth?.user.publications,
//         professionalExperience:
//           professionalExperience || auth?.user.professionalExperience,
//         honorsAndAwards: honorsAndAwards || auth?.user.honorsAndAwards,
//         professionalMemberships:
//           professionalMemberships || auth?.user.professionalMemberships,
//         skills: skills || auth?.user.skills,
//         socialMediaProfiles:
//           socialMediaProfiles || auth?.user.socialMediaProfiles,
//         photo: photo || auth?.user.photo,
//       });

//       if (data?.error) {
//         toast.error(data.error);
//       } else {
//         setAuth({ ...auth, user: data?.updatedUser });
//         let ls = localStorage.getItem("auth");
//         ls = JSON.parse(ls);
//         ls.user = data.updatedUser;
//         localStorage.setItem("auth", JSON.stringify(ls));
//         toast.success("Profile Updated Successfully");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <div>
//       <div className="container-fluid m-3 p-3">
//         <div className="row">
//           <div className="col-md-3">
//           {/* <UserMenu /> */}
//           </div>
//           <div className="col-md-9">
//             <div className="form-container">
//               <form onSubmit={handleSubmit}>
//                 <h4 className="title">SCHOLAR PROFILE</h4>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="form-control"
//                     placeholder="Enter Your Name"
//                     autoFocus
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     value={affiliation}
//                     onChange={(e) => setAffiliation(e.target.value)}
//                     className="form-control"
//                     placeholder="Enter Your Affiliation"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     className="form-control"
//                     placeholder="Enter Your Title"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     value={contact}
//                     onChange={(e) => setContact(e.target.value)}
//                     className="form-control"
//                     placeholder="Enter Your Contact Information"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <textarea
//                     value={researchInterests}
//                     onChange={(e) => setResearchInterests(e.target.value)}
//                     className="form-control"
//                     placeholder="Enter Your Research Interests"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <textarea
//                     value={education}
//                     onChange={(e) => setEducation(e.target.value)}
//                     className="form-control"
//                     placeholder="Enter Your Education"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <textarea
//                     value={publications}
//                     onChange={(e) => setPublications(e.target.value)}
//                     className="form-control"
//                     placeholder="Enter Your Publications"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <textarea
//                     value={professionalExperience}
//                     onChange={(e) => setProfessionalExperience(e.target.value)}
//                     className="form-control"
//                     placeholder="Enter Your Professional Experience"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <textarea
//                     value={honorsAndAwards}
//                     onChange={(e) => setHonorsAndAwards(e.target.value)}
//                     className="form-control"
//                     placeholder="Enter Your Honors and Awards"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <textarea
//                     value={professionalMemberships}
//                     onChange={(e) => setProfessionalMemberships(e.target.value)}
//                     className="form-control"
//                     placeholder="Enter Your Professional Memberships"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <textarea
//                     value={skills}
//                     onChange={(e) => setSkills(e.target.value)}
//                     className="form-control"
//                     placeholder="Enter Your Skills"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <textarea
//                     value={socialMediaProfiles}
//                     onChange={(e) => setSocialMediaProfiles(e.target.value)}
//                     className="form-control"
//                     placeholder="Enter Your Social Media Profiles"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     value={photo}
//                     onChange={(e) => setPhoto(e.target.value)}
//                     className="form-control"
//                     placeholder="Enter URL of Your Photo"
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                   UPDATE
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScholarProfile;


import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/Auth";
import toast from "react-hot-toast";
import axios from "axios";

const ScholarProfile = () => {
  // context
  const [auth, setAuth] = useAuth();

  // state
  const [name, setName] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [researchInterests, setResearchInterests] = useState([]);
  const [education, setEducation] = useState([]);
  const [publications, setPublications] = useState([]);
  const [professionalExperience, setProfessionalExperience] = useState([]);
  const [honorsAndAwards, setHonorsAndAwards] = useState([]);
  const [professionalMemberships, setProfessionalMemberships] = useState([]);
  const [skills, setSkills] = useState([]);
  const [socialMediaProfiles, setSocialMediaProfiles] = useState({});
  const [photo, setPhoto] = useState("");

  // get user data
  useEffect(() => {
    const {
      name,
      affiliation,
      title,
      contact,
      researchInterests,
      education,
      publications,
      professionalExperience,
      honorsAndAwards,
      professionalMemberships,
      skills,
      socialMediaProfiles,
      photo,
    } = auth?.user || {};

    setName(name || "");
    setAffiliation(affiliation || "");
    setTitle(title || "");
    setEmail(contact?.email || "");
    setPhone(contact?.phone || "");
    setWebsite(contact?.website || "");
    setResearchInterests(researchInterests || []);
    setEducation(education || []);
    setPublications(publications || []);
    setProfessionalExperience(professionalExperience || []);
    setHonorsAndAwards(honorsAndAwards || []);
    setProfessionalMemberships(professionalMemberships || []);
    setSkills(skills || []);
    setSocialMediaProfiles(socialMediaProfiles || {});
    setPhoto(photo || "");
  }, [auth?.user]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/scholars", {
        name,
        affiliation,
        title,
        contact: { email, phone, website },
        researchInterests,
        education,
        publications,
        professionalExperience,
        honorsAndAwards,
        professionalMemberships,
        skills,
        socialMediaProfiles,
        photo,
      });

      if (data?.error) {
        toast.error(data.error);
      } else {
        setAuth({ ...auth, user: data?.updatedScholar });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedScholar;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">{/* <UserMenu /> */}</div>
          <div className="col-md-9">
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <h4 className="title">SCHOLAR PROFILE</h4>
                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Name"
                    autoFocus
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={affiliation}
                    onChange={(e) => setAffiliation(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Affiliation"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Title"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Phone"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Website"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={researchInterests.join(", ")}
                    onChange={(e) =>
                      setResearchInterests(e.target.value.split(", "))
                    }
                    className="form-control"
                    placeholder="Enter Your Research Interests (comma separated)"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={education.join("\n")}
                    onChange={(e) => setEducation(e.target.value.split("\n"))}
                    className="form-control"
                    placeholder="Enter Your Education (newline separated)"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={publications.join("\n")}
                    onChange={(e) =>
                      setPublications(e.target.value.split("\n"))
                    }
                    className="form-control"
                    placeholder="Enter Your Publications (newline separated)"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={professionalExperience.join("\n")}
                    onChange={(e) =>
                      setProfessionalExperience(e.target.value.split("\n"))
                    }
                    className="form-control"
                    placeholder="Enter Your Professional Experience (newline separated)"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={honorsAndAwards.join("\n")}
                    onChange={(e) =>
                      setHonorsAndAwards(e.target.value.split("\n"))
                    }
                    className="form-control"
                    placeholder="Enter Your Honors and Awards (newline separated)"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={professionalMemberships.join(", ")}
                    onChange={(e) =>
                      setProfessionalMemberships(e.target.value.split(", "))
                    }
                    className="form-control"
                    placeholder="Enter Your Professional Memberships (comma separated)"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={skills.join(", ")}
                    onChange={(e) => setSkills(e.target.value.split(", "))}
                    className="form-control"
                    placeholder="Enter Your Skills (comma separated)"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={JSON.stringify(socialMediaProfiles, null, 2)}
                    onChange={(e) =>
                      setSocialMediaProfiles(JSON.parse(e.target.value))
                    }
                    className="form-control"
                    placeholder="Enter Your Social Media Profiles (as JSON)"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    className="form-control"
                    placeholder="Enter URL of Your Photo"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarProfile;

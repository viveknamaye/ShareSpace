import Sidebar from "../../Components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import "./GroupDetail.css";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";

const GroupDetails = (props) => {
  console.log("GroupDetails");
  const [user, setUser] = useState({});
  useEffect(() => {
    if (props.user) {
      getDoc(doc(collection(getFirestore(), "user"), props.user.uid)).then(
        (doc) => {
          if (doc.exists()) {
            setUser(doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }
      );
    }
  }, [props.user]);
  const [group, setGroup] = useState([]);
  useEffect(() => {
    console.log(user);
    for (let i = 0; i < user.connection.length; i++) {
      getDoc(doc(collection(getFirestore(), "user"), user.connection[i])).then(
        (doc) => {
          if (doc.exists()) {
            setGroup((prev) => [...prev, doc.data()]);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }
      );
    }
  }, [user]);

  console.log(group);

  return (
    <>
      <Sidebar />
      <div class="p-4 sm:ml-64 mt-16">
        <div class="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
          <a className="flex items-center gap-2 mb-4" href="">
            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#615858"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="font-bold text-gray-500">Back</span>
          </a>
          <div className="group-container">
            <div className="group-left">
              <div className="group-card">
                <div className="group-icon">icon</div>
                <div className="group-content">
                  <p className="group-content-title">{group.title}</p>
                  <p className="group-content-subtitle">{group.info}</p>
                </div>
                <div className="group-limit">
                  <div className="limit">
                    {group.current} / {group.limit}
                  </div>
                </div>
              </div>
              <div className="group-info">
                <div className="group-info-member">MEMBERS</div>
                <div className="group-info-member-list">
                  {group.members.map((member) => {
                    return (
                      <>
                        <div className="group-member">
                          <div className="group-member-icon">ICON</div>
                          <div className="group-member-name">{member.name}</div>
                          <div className="group-member-tags">
                            {member.tags.map((tag) => {
                              return (
                                <>
                                  <div className="group-member-tag">{tag}</div>
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="group-request">JOIN REQUEST</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupDetails;

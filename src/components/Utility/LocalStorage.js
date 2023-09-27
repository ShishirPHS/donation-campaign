import Swal from "sweetalert2";

const getStoredDonations = () => {
  const storedDonations = localStorage.getItem("donations");
  if (storedDonations) {
    return JSON.parse(storedDonations);
  }

  return [];
};

const saveDonation = (id) => {
  const storedDonations = getStoredDonations();

  const isExist = storedDonations.find((donationId) => donationId === id);

  if (!isExist) {
    storedDonations.push(id);
    localStorage.setItem("donations", JSON.stringify(storedDonations));
    // alert("you donate successfully!");
    Swal.fire({
      icon: "success",
      title: "You donate successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Already Donated",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export { saveDonation, getStoredDonations };

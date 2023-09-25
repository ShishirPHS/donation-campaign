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
    alert("you donate successfully!");
  } else {
    alert("already donated");
  }
};

export { saveDonation, getStoredDonations };

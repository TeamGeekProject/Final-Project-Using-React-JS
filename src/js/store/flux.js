const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [
        {
          full_name: "test",
          email: "test@gmail.com",
          address: "someplace",
          phone: "7864445566",
        },
      ],
      agenda_slug: "teamgeekuser",
      formMessageSuccess: "",
      formMessageError: "",
    },
    actions: {
      createContact: async (input) => {
        console.log(input);
        const store = getStore();
        const user = store.user;
        await fetch("https://assets.breatheco.de/apis/fake/contact/", {
          method: "POST",
          body: JSON.stringify({
            full_name: input.full_name,
            email: input.email,
            agenda_slug: store.agenda_slug,
            address: input.address,
            phone: input.phone,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            data.msg
              ? (setStore({ formMessageError: data.msg }),
                setStore({ formMessageSuccess: "" }))
              : (setStore({ formMessageSuccess: "Contact created" }),
                setStore({ formMessageError: "" }));
          })
          .catch((error) => {
            console.log("error");
          });
      },
    },
  };
};

export default getState;

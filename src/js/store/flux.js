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
      loadData: async () => {
        const store = getStore();
        const agenda = store.agenda_slug;
        const response = await fetch(
          `https://assets.breatheco.de/apis/fake/contact/agenda/${agenda}`
        );
        const data = await response.json();
        setStore({ contacts: data });
      },
      createContact: async (input) => {
        // console.log(input);
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
            // console.log(data);
            data.msg
              ? (setStore({ formMessageError: data.msg }),
                setStore({ formMessageSuccess: "" }))
              : (setStore({ formMessageSuccess: "Contact created" }),
                setStore({ formMessageError: "" }),
                setStore({ contacts: [...store.contacts, data] }));
          })
          .catch((error) => {
            console.log("error");
          });
      },
      deleteContact: async (id, index) => {
        const store = getStore();
        const user = store.user;
        const contacts = store.contacts.filter((item, i) => i !== index);
        await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(setStore({ contacts: contacts }))
          .catch((error) => console.log("error"));
      },
      updateContact: async (input, contactID, index) => {
        const store = getStore();

        const contacts = store.contacts;

        await fetch(
          `https://assets.breatheco.de/apis/fake/contact/${contactID}`,
          {
            method: "PUT",
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
          }
        )
          .then((response) => response.json())
          .then((data) => {
            data.msg
              ? (setStore({ formMessageError: data.msg }),
                setStore({ formMessageSuccess: "" }))
              : (setStore({ formMessageSuccess: "Contact was Updated" }),
                setStore({ formMessageError: "" }),
                (contacts[index] = data),
                setStore({ contacts: [...contacts] }));
          })

          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;

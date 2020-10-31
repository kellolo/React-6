export let ADD_CHAT = "@@chat/ADD_CHAT";

export let addDialog = (contact) => ({
  contact,
  type: ADD_CHAT,
});
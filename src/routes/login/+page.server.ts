import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  login: async ({ request, cookies }) => {
    const data = await request.formData();

    const credentials = {
      username: data.get("username"),
      password: data.get("password"),
    };

    //then

    console.log(credentials);
  },
};

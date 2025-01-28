import {
  waitFor,
  waitForElementToBeRemoved,
  render,
  screen,
  renderHook,
  act,
} from "@testing-library/react";
import Home from "./page";
import userEvent from "@testing-library/user-event";
import { customRender } from "./test-utils";
import React from "react";

// it("should render app component without crashing", () => {
//   render(<Home />);

//   const element = screen.getByText("Modern World");

//   expect(element).toBeInTheDocument();
// });

// it("should render button component without crashing", () => {
//   render(<Home />);

//   const element = screen.getByText("Button");

//   expect(element).toBeInTheDocument();
// });

// it("should render suffix component without crashing", () => {
//   render(<Home suffix="Test" />);

//   const element = screen.getByText("test", {
//     exact: false,
//   });

//   const emptyElement = screen.queryByText("No suffix");

//   expect(emptyElement).not.toBeInTheDocument();
//   expect(element).toBeInTheDocument();
// });

//*FindBy
// it("should render suffix component with findBy without crashing", async () => {
//   // State kısmı
//   render(<Home />);

//   const element = await screen.findByText("Ahmet", {
//     exact: false,
//   });

//   expect(element).toBeInTheDocument();
// });

it("should render waitFor without crashing", async () => {
  // State kısmı
  render(<Home />);

  //*General waitFor
  // await waitFor(() => {
  //   expect(screen.getByText("Mehmet")).toBeInTheDocument();
  // });

  // await waitFor(() => {
  //   expect(screen.queryByText("Ahmet")).not.toBeInTheDocument();
  // });

  //*waitForElementToBeRemoved
  // await waitForElementToBeRemoved(() => screen.queryByText("Ahmet"));
  // await waitFor(() => {
  //   expect(screen.getByText("Mehmet")).toBeInTheDocument();
  // });
});

//* Query Selector but not recommended
// it("should render dom query selector", async () => {
//   const { container } = render(<Home />);

//   const element = container.querySelector(".text-2xl");

//   expect(element).toBeInTheDocument();
// });

//* Screen debug , hata verilen yer gözükmemesi durumunda
// it("should render screen debug ", () => {
//   render(<Home />);

//   // Ekranı yazdırır
//   screen.debug();
//   const element = screen.getByText("Modern Testing");

//   expect(element).toBeInTheDocument();
// });

//* Pointer Events
// it("should render UserEvents ", async () => {
//   const user = userEvent.setup();
//   render(<Home />);
//   await user.pointer({
//     keys: "[MouseLeft]",
//     target: screen.getByRole("button", { name: "Increment" }),
//   });

//   const headingElement = await screen.findByRole("heading");

//   expect(headingElement).toHaveTextContent("1");
// });

//* Keyboard Events
// it("should render keyboard events ", async () => {
//   const user = userEvent.setup();
//   render(<Home />);

//   const buttonElement = screen.getByRole("button", { name: "Increment" });

//   await user.keyboard("[tab]");
//   await user.keyboard("[Enter]");

//   const headingElement = await screen.findByRole("heading");

//   expect(buttonElement).toHaveFocus();
//   expect(headingElement).toHaveTextContent("1");
// });

//* Clipboard Events
// it("should render Clipboard ", async () => {
//   const user = userEvent.setup();
//   render(<Home />);

//   await user.keyboard("[tab]");
//   await user.keyboard("[Enter]");

//   const inputElement = screen.getByRole("textbox");
//   inputElement.focus();

//   await user.paste();

//   expect(inputElement).toHaveValue("Heey");
// });

//* Select Options
// it("should render Select ", async () => {
//   const user = userEvent.setup();
//   render(<Home />);

//   const fruits = screen.getByRole("listbox");

//   await user.selectOptions(fruits, ["Elma", "Armut"]);

//   expect(screen.getByRole("option", { name: "Elma" })).toBeTruthy();
//   expect(
//     (screen.getByRole("option", { name: "Armut" }) as HTMLOptionElement)
//       .selected
//   ).toBe(true);
//   expect(
//     (screen.getByRole("option", { name: "Muz" }) as HTMLOptionElement).selected
//   ).toBe(false);

//   await user.deselectOptions(fruits, ["Elma"]);

//   expect(
//     (screen.getByRole("option", { name: "Elma" }) as HTMLOptionElement).selected
//   ).toBe(false);
// });

//* Type
// it("should render Type ", async () => {
//   const user = userEvent.setup();
//   render(<Home />);

//   const inputElement = screen.getByRole("textbox");

//   await user.type(inputElement, "Heey");

//   // İkisi de doğru, alttakini kullanmak için yukarıda typescript tanımlaması yapılmalı
//   // expect(inputElement.value).toBe("Heey");
//   expect(inputElement).toHaveValue("Heey");
// });

//* Click, double click, hover event
// it("should render Clicks ", async () => {
//   const user = userEvent.setup();
//   render(<Home />);

//   const buttonElement = screen.getByRole("button", { name: "Click me" });

//   await user.click(buttonElement);
//   // dblClick
//   // tripleClick
//   // hover
//   expect(true).toBe(true);
// });

//* Provider
// it("should render provider ", async () => {
//   render(<Home />, {
//     wrapper: ({ children }) => <div className="wrapper">{children}</div>,
//   });

//   screen.debug();
// });

//* Custom Renderer Setup
// it("should render render ", async () => {
//   customRender(<Home />);

//   screen.debug();
// });

//* Hook Testing RenderHook ve Act
// function useCustomHook() {
//   const [name, setName] = React.useState("Ahmet");
//   const changeName = (newName: string) => {
//     setName(newName);
//   };

//   return { name, changeName };
// }

// it("should render render ", async () => {
//   const { result } = renderHook(useCustomHook);

//   expect(result.current.name).toBe("Ahmet");

//   act(() => {
//     result.current.changeName("Mehmet");
//   });

//   expect(result.current.name).toBe("Mehmet");
// });

//* BeforeEach and AfterEach
// class DatabaseClient {
//   users: { id: number; name: string }[];
//   constructor() {
//     this.users = [];
//   }

//   initialize() {
//     this.users = [
//       {
//         id: 1,
//         name: "Ahmet",
//       },
//       {
//         id: 2,
//         name: "Mehmet",
//       },
//     ];
//   }

//   getUsers() {
//     return this.users;
//   }

//   getUser(id: number) {
//     return this.users.find((user) => user.id === id);
//   }

//   deleteUser(id: number) {
//     this.users = this.users.filter((user) => user.id !== id);
//   }

//   reset() {
//     this.users = [];
//   }
// }

describe("Database Client", () => {
  //* Without beforeEach
  // it("should initialize with two users ", async () => {
  //   const dbClient = new DatabaseClient();
  //   dbClient.initialize();
  //   const users = dbClient.getUsers();
  //   expect(users.length).toBe(2);
  //   expect(users).toMatchObject([
  //     { id: 1, name: "Ahmet" },
  //     { id: 2, name: "Mehmet" },
  //   ]);
  // });
  // it("should delete a user ", async () => {
  //   const dbClient = new DatabaseClient();
  //   dbClient.initialize();
  //   dbClient.deleteUser(1);
  //   const user = dbClient.getUser(1);
  //   expect(user).toBeFalsy();
  // });
  // it("should get a user ", async () => {
  //   const dbClient = new DatabaseClient();
  //   dbClient.initialize();
  //   const user = dbClient.getUser(1);
  //   expect(user).toMatchObject({ id: 1, name: "Ahmet" });
  // });
  //* With beforeEach
  // let dbClient: DatabaseClient;
  // beforeEach(() => {
  //   dbClient = new DatabaseClient();
  //   dbClient.initialize();
  // });
  // it("should initialize with two users ", async () => {
  //   const users = dbClient.getUsers();
  //   expect(users.length).toBe(2);
  //   expect(users).toMatchObject([
  //     { id: 1, name: "Ahmet" },
  //     { id: 2, name: "Mehmet" },
  //   ]);
  // });
  // it("should delete a user ", async () => {
  //   dbClient.deleteUser(1);
  //   const user = dbClient.getUser(1);
  //   expect(user).toBeFalsy();
  // });
  // it("should get a user ", async () => {
  //   const user = dbClient.getUser(1);
  //   expect(user).toMatchObject({ id: 1, name: "Ahmet" });
  // });
});

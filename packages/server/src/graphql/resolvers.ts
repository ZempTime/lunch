import { Prisma } from "../prisma/generated/prisma-client";

type Context = {
  db: Prisma
}

const resolvers = {
  Query: {
    async meals(_parent: any, _args: any, ctx: any, _info: any): Promise<any> {
      const meals = await ctx.db.meals()
      return meals;
    },
    async meal(_parent: any, args: any, ctx: any, _info: any): Promise<any> {
      const meal = await ctx.db.meal({id: args.id})
      return meal;
    },
  },
  Mutation: {
    async createMeal(_parent: any, args: any, ctx: Context, _info: any): Promise<any> {
      const meal = await ctx.db.createMeal({...args.data})
      // createMeal({name, satisfactionLevel})
      return meal;
    },
    async updateMeal(_parent: any, args: any, ctx: Context, _info: any): Promise<any> {
      const updates = {...args.data};
      delete updates.id;

      return ctx.db.updateMeal({
        data: updates,
        where: {id: args.data.id}
      })
    }
  }
}

export {resolvers};
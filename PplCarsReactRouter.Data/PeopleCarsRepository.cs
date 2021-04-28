using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PplCarsReactRouter.Data
{
    public class PeopleCarsRepository
    {
        private string _connectionString;
        public PeopleCarsRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Person> GetAll()
        {
            var context = new PeopleCarsDbContext(_connectionString);
            return context.People.Include(p => p.Cars).ToList();
        }
        public void AddPerson(Person person)
        {
            var ctx = new PeopleCarsDbContext(_connectionString);
            ctx.People.Add(person);
            ctx.SaveChanges();
        }
        public Person GetPersonById(int id)
        {
            var ctx = new PeopleCarsDbContext(_connectionString);
            return ctx.People.FirstOrDefault(p => p.Id == id);
        }
        public void AddCar(Car car)
        {
            var ctx = new PeopleCarsDbContext(_connectionString);
            ctx.Cars.Add(car);
            ctx.SaveChanges();
        }
        public List<Car> GetCarsForPerson(int id)
        {
            var ctx = new PeopleCarsDbContext(_connectionString);
            return ctx.Cars.Where(c => c.PersonId == id).ToList();
        }
        public void DeleteCars(int id)
        {
            using var context = new PeopleCarsDbContext(_connectionString);
            context.Database.ExecuteSqlInterpolated($"DELETE FROM Cars WHERE personId = {id}");
        }
    }
}

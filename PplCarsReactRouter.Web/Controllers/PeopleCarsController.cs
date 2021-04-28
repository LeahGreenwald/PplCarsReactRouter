using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PplCarsReactRouter.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PplCarsReactRouter.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarsController : ControllerBase
    {
        private string _connectionString;
        public PeopleCarsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("GetAll")]
        [HttpGet]
        public List<Person> GetAll()
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetAll();
        }
        [Route("AddPerson")]
        [HttpPost]
        public void AddPerson(Person person)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.AddPerson(person);
        }
        [Route("AddCar")]
        [HttpPost]
        public void AddCar(Car car)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.AddCar(car);
        }
        [Route("GetById")]
        [HttpGet]
        public Person GetById(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetPersonById(id);
        }

        [Route("GetCarsForPerson")]
        [HttpGet]
        public List<Car> GetCarsForPerson(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetCarsForPerson(id);
        }
        [Route("DeleteCars")]
        [HttpPost]
        public void DeleteCars(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.DeleteCars(id);
        }
    }
}

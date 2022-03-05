<?php

namespace App\DataFixtures;

use App\Entity\Cars;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

use Faker;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = (new Faker\Factory())::create();
        $faker->addProvider(new Faker\Provider\Fakecar($faker));

        for ($i = 0; $i < 20; $i++) {
            $car = new Cars();
            $car->setName($faker->vehicle());
            $car->setBrand($faker->vehicleBrand());
            $manager->persist($car);
        }

        $manager->flush();
    }
}

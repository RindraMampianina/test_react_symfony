<?php

 namespace App\Controller;


 use App\Entity\User;
use App\Repository\UserRepository;
use App\Repository\UsersRepository;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
 use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
 use Symfony\Component\HttpFoundation\JsonResponse;
 use Symfony\Component\HttpFoundation\Request;
 use Symfony\Component\HttpFoundation\Response;
 use Symfony\Component\Routing\Annotation\Route;
 use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
 use Symfony\Component\Security\Core\User\UserInterface;

 class AuthenticationController extends StatusController
 {

    public function getTokenUser(JWTTokenManagerInterface $JWTManager, Request $request, UsersRepository $usersRepository)
    {
        $request = $this->transformJsonBody($request);

        $email = $request->get('email');
        $password = $request->get('password');

        $user = $usersRepository->findOneBy(['email'=> $email]);

        $ok = false;
        $token = null;

        if($user)
        {
            $ok = password_verify($password, $user->getPassword());

            if($ok)
            {
                $token = $JWTManager->create($user);
            }
            return new JsonResponse(['token' => $token, 'user' => $user->getId()]);
        }

        return new JsonResponse(['token' => null]);

        

    }

 }
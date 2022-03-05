<?php

namespace App\Events;

use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\Comments;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Security\Core\Security;

class CurrentUserCommentSubscriber implements EventSubscriberInterface
{

    private $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['currentUserForComments', EventPriorities::PRE_VALIDATE]
        ];

    }

    public function FunctionName(ViewEvent $event): void
    {
        $comment = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if($comment instanceof Comments && Request::METHOD_POST === $method)
        {
            $comment->setUserInfo($this->security->getUser());
        }
    }

}